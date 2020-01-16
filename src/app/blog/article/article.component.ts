import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

import { ArticlesService } from "../articles.service";

@Component({
  selector: "gp-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {
  articleForm: FormGroup;
  isCustomHTMLSelected = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private articlesService: ArticlesService
  ) {
    this.articleForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      author: ["", [Validators.required]],
      image: ["", [Validators.required]],
      isCustomHTML: [""],
      url: [""],
      content: [""]
    });
  }

  ngOnInit() {
    this.articleForm.get("isCustomHTML").valueChanges.subscribe(value => {
      this.isCustomHTMLSelected = value;
      if (value) {
        this.articleForm.get("content").setValidators(Validators.required);
        this.articleForm.get("url").clearValidators();
      } else {
        this.articleForm.get("url").setValidators(Validators.required);
        this.articleForm.get("content").clearValidators();
      }
      this.articleForm.get("content").setValue("");
      this.articleForm.get("url").setValue("");
      this.articleForm.updateValueAndValidity();
    });
    this.articleForm.get("isCustomHTML").setValue(this.isCustomHTMLSelected);
  }

  save() {
    const dataToPersist = this.articleForm.value;
    delete dataToPersist.isCustomHTML;
    this.articlesService.postArticle(dataToPersist);
    this.articleForm.reset();
    this.router.navigate(["blog"]);
  }

  cancel() {
    this.router.navigate(["blog"]);
  }
}
