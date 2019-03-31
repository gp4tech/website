import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogsService } from './blogs.service';
import { TopBlogsComponent } from './top-blogs/top-blogs.component';

@NgModule({
  declarations: [BlogComponent, TopBlogsComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
  exports: [TopBlogsComponent],
  providers: [BlogsService]
})
export class BlogModule {}
