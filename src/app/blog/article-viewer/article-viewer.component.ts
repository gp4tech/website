import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ArticlesService } from "../articles.service";
import { Article } from "src/app/shared/models/article.model";

@Component({
  selector: "gp-article-viewer",
  templateUrl: "./article-viewer.component.html",
  styleUrls: ["./article-viewer.component.scss"]
})
export class ArticleViewerComponent implements OnInit {
  article: Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.articlesService.getById(params.id).subscribe(article => {
        this.article = article;
      });
    });
  }
}
