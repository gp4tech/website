import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Blog } from '../shared/models/blog.model';
import { BlogsService } from '../shared/blogs/blogs.service';

const DEFAULT_IMAGE = 'assets/images/GP4Tech-logo.png';

@Component({
  selector: 'gp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs$: Observable<Blog[]>;
  defaultImage = DEFAULT_IMAGE;

  constructor(public blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getBlogsWithMetadata();
  }
}
