import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBarViews } from './layout/layout.model';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: AppBarViews.home, loadChildren: './home/home.module#HomeModule' },
//   { path: AppBarViews.about, loadChildren: './about-us/about-us.module#AboutUsModule' },
//   { path: AppBarViews.events, loadChildren: './events/events.module#EventsModule' },
//   { path: AppBarViews.blog, loadChildren: './blog/blog.module#BlogModule' },
//   { path: AppBarViews.involved, loadChildren: './get-involved/get-involved.module#GetInvolvedModule' }
// ];
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: AppBarViews.home, component: HomeComponent },
  { path: AppBarViews.about, component: AboutUsComponent },
  { path: AppBarViews.events, component: EventsComponent },
  { path: AppBarViews.blog, component: BlogComponent },
  { path: AppBarViews.involved, component: GetInvolvedComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
