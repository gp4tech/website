import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Article } from '../shared/models/article.model';
import { ArticlesService } from './articles.service';
import { CloudFunctions } from '../shared/models/cloud-functions.constant';

@Component({
  selector: 'gp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles$: Observable<Article[]>;
  defaultImage: string;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articles$ = this.articlesService.getAllArticles();
    this.defaultImage = this.articlesService.defaultArticleImage;
  }

  updateArticleViews(article: Article): void {
    this.articlesService
      .updateUsingCloudFunction(article.id, CloudFunctions.updateArticleViews)
      .subscribe();
  }
}
