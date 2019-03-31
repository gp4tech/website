import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Blog } from 'src/app/shared/models/blog.model';
import { BlogsService } from 'src/app/shared/services/blogs/blogs.service';
import { CloudFunctions } from 'src/app/shared/services/data/cloud-functions';
import { DataOrder } from 'src/app/shared/models/data-type.model';

const MAX_TOP_BLOGS_LENGTH = 3;

@Component({
  selector: 'gp-top-blogs',
  templateUrl: './top-blogs.component.html',
  styleUrls: ['./top-blogs.component.scss']
})
export class TopBlogsComponent implements OnInit {
  blogs$: Observable<Blog[]>;
  defaultImage: string;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getAllSorted(
      'views',
      DataOrder.desc,
      MAX_TOP_BLOGS_LENGTH
    );
    this.defaultImage = this.blogsService.defaultBlogImage;
  }

  updateBlogViews(blog: Blog): void {
    this.blogsService
      .updateUsingCloudFunction(blog.id, CloudFunctions.updateBlogViews)
      .subscribe();
  }
}
