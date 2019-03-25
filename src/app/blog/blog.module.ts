import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogsService } from '../shared/blogs/blogs.service';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
  providers: [BlogsService]
})
export class BlogModule {}
