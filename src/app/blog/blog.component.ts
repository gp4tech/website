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
  blogs$: Observable<Article[]>;
  defaultImage: string;

  constructor(private blogsService: ArticlesService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getAllBlogs();
    this.defaultImage = this.blogsService.defaultBlogImage;
  }

  updateBlogViews(blog: Article): void {
    this.blogsService
      .updateUsingCloudFunction(blog.id, CloudFunctions.updateBlogViews)
      .subscribe();
  }
}
