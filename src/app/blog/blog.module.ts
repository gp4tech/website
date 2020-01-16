import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';

import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { ArticlesService } from './articles.service';
import { TopArticlesComponent } from './top-articles/top-articles.component';
import { TopArticleComponent } from './top-articles/top-article/top-article.component';
import { ArticleComponent } from './article/article.component';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [BlogComponent, TopArticlesComponent, TopArticleComponent, ArticleComponent, ArticleViewerComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [TopArticlesComponent],
  providers: [ArticlesService]
})
export class BlogModule {}
