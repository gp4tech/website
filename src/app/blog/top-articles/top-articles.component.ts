import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Article } from '../../shared/models/article.model';
import { ArticlesService } from '../articles.service';
import { CloudFunctions } from '../../shared/models/cloud-functions.constant';
import { DataOrder } from '../../shared/models/data-type.model';

const MAX_TOP_BLOGS_LENGTH = 3;

@Component({
  selector: 'gp-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.scss']
})
export class TopArticlesComponent implements OnInit {
  blogs$: Observable<Article[]>;
  defaultImage: string;

  constructor(private blogsService: ArticlesService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getAllSorted(
      'views',
      DataOrder.desc,
      MAX_TOP_BLOGS_LENGTH
    );
    this.defaultImage = this.blogsService.defaultBlogImage;
  }

  updateBlogViews(blog: Article): void {
    this.blogsService
      .updateUsingCloudFunction(blog.id, CloudFunctions.updateBlogViews)
      .subscribe();
  }
}
