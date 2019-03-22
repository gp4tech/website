import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Blog } from 'src/app/shared/models/blog.model';
import { BlogsService } from 'src/app/shared/blogs/blogs.service';

const DEFAULT_IMAGE = 'assets/images/GP4Tech-logo.png';

@Component({
  selector: 'gp-top-blogs',
  templateUrl: './top-blogs.component.html',
  styleUrls: ['./top-blogs.component.scss']
})
export class TopBlogsComponent implements OnInit {
  blogs$: Observable<Blog[]>;
  defaultImage = DEFAULT_IMAGE;

  constructor(public blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getTopBlogs();
  }
}
