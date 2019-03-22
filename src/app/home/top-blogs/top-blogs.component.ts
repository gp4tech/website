import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Blog } from 'src/app/shared/models/blog.model';
import { BlogsService } from 'src/app/shared/blogs/blogs.service';
import { CloudFunctions } from 'src/app/shared/data-service/cloud-functions';

@Component({
  selector: 'gp-top-blogs',
  templateUrl: './top-blogs.component.html',
  styleUrls: ['./top-blogs.component.scss']
})
export class TopBlogsComponent implements OnInit {
  blogs$: Observable<Blog[]>;
  defaultImage: string;

  constructor(public blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getTopBlogs();
    this.defaultImage = this.blogsService.defaultBlogImage;
  }

  updateBlogViews(blog: Blog): void {
    this.blogsService
      .updateBlogOnServer(blog, CloudFunctions.updateBlogViews)
      .subscribe();
  }
}
