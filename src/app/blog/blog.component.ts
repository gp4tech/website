import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageService } from '../core/language.service';
import { ArticlesService } from './articles.service';
import { Article } from '../shared/models/article.model';
import { CloudFunctions } from '../shared/models/cloud-functions.constant';

const MAX_TOP_ARTICLES_LENGTH = 3;

@Component({
  selector: 'gp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles$: Observable<Article[]>;
  topArticles$: Observable<Article[]>;
  defaultText: string;
  defaultImage: string;
  onInitDate: Date;

  constructor(
    public languageService: LanguageService,
    private articlesService: ArticlesService,
  ) {}

  ngOnInit(): void {
    this.articles$ = this.articlesService.getAllArticles();
    this.topArticles$ = this.articlesService.getTopArticles(
      MAX_TOP_ARTICLES_LENGTH,
    );
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
