import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBarViews } from './layout/layout.model';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: AppBarViews.about, loadChildren: './about-us/about-us.module#AboutUsModule' },
  { path: AppBarViews.events, loadChildren: './events/events.module#EventsModule' },
  { path: AppBarViews.blog, loadChildren: './blog/blog.module#BlogModule' },
  { path: AppBarViews.involved, loadChildren: './get-involved/get-involved.module#GetInvolvedModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
