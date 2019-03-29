import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Blog } from '../shared/models/blog.model';
import { BlogsService } from '../shared/blogs/blogs.service';
import { CloudFunctions } from '../shared/data-service/cloud-functions';

@Component({
  selector: 'gp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs$: Observable<Blog[]>;
  defaultImage: string;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getAllBlogs();
    this.defaultImage = this.blogsService.defaultBlogImage;
  }

  updateBlogViews(blog: Blog): void {
    this.blogsService
      .updateUsingCloudFunction(blog.id, CloudFunctions.updateBlogViews)
      .subscribe();
  }
}
