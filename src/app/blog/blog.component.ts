import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Blog } from '../shared/models/blog.model';
import { BlogsService } from '../shared/blogs/blogs.service';

@Component({
  selector: 'gp-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs$: Observable<Blog[]>;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogsService.getBlogsWithMetadata();
  }
}
