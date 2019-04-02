import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Article } from '../../shared/models/article.model';
import { ArticlesService } from '../articles.service';
import { CloudFunctions } from '../../shared/models/cloud-functions.constant';
import { DataOrder } from '../../shared/models/data-type.model';

const MAX_TOP_ARTICLES_LENGTH = 3;

@Component({
  selector: 'gp-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.scss']
})
export class TopArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;
  defaultImage: string;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articles$ = this.articlesService.getAllSorted(
      'views',
      DataOrder.desc,
      MAX_TOP_ARTICLES_LENGTH
    );
    this.defaultImage = this.articlesService.defaultArticleImage;
  }

  updateArticleViews(article: Article): void {
    this.articlesService
      .updateUsingCloudFunction(article.id, CloudFunctions.updateArticleViews)
      .subscribe();
  }
}
