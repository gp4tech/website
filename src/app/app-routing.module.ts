import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppBarViews } from './layout/layout.model';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';

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
