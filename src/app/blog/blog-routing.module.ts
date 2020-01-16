import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article/article.component';
import { ArticleViewerComponent } from './article-viewer/article-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'create-article',
    component: ArticleComponent
  },
  {
    path: 'article/:id',
    component: ArticleViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
