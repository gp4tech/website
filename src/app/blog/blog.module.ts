import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesService } from './articles.service';
import { TopArticlesComponent } from './top-articles/top-articles.component';
import { TopArticleComponent } from './top-articles/top-article/top-article.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [BlogComponent, TopArticlesComponent, TopArticleComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
  exports: [TopArticlesComponent],
  providers: [ArticlesService]
})
export class BlogModule {}
