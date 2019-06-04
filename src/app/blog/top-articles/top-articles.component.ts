import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Article } from '../../shared/models/article.model';
import { ArticlesService } from '../articles.service';

const MAX_TOP_ARTICLES_LENGTH = 3;

@Component({
  selector: 'gp-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.scss']
})
export class TopArticlesComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.articles$ = this.articlesService.getTopArticles(
      MAX_TOP_ARTICLES_LENGTH
    );
  }
}
