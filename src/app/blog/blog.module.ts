import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesService } from './articles.service';
import { TopArticlesComponent } from './top-articles/top-articles.component';

@NgModule({
  declarations: [BlogComponent, TopArticlesComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
  exports: [TopArticlesComponent],
  providers: [ArticlesService]
})
export class BlogModule {}
