import { Component, OnInit, Input } from '@angular/core';

import { ArticlesService } from '../../articles.service';
import { Article } from '../../../shared/models/article.model';
import { CloudFunctions } from '../../../shared/models/cloud-functions.constant';

@Component({
  selector: 'gp-top-article',
  templateUrl: './top-article.component.html',
  styleUrls: ['./top-article.component.scss']
})
export class TopArticleComponent implements OnInit {
  @Input() article: Article;
  defaultText: string;
  defaultImage: string;
  onInitDate: Date;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.defaultText = this.articlesService.defaultText;
    this.defaultImage = this.articlesService.defaultImage;
    this.onInitDate = new Date();
  }

  updateArticleViews(article: Article): void {
    this.articlesService
      .updateUsingCloudFunction(article.id, CloudFunctions.updateArticleViews)
      .subscribe();
  }
}
