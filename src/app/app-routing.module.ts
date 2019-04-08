import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBarRoutes } from './shared/models/routes.model';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: AppBarRoutes.about,
    loadChildren: './about-us/about-us.module#AboutUsModule'
  },
  {
    path: AppBarRoutes.events,
    loadChildren: './events/events.module#EventsModule'
  },
  { path: AppBarRoutes.blog, loadChildren: './blog/blog.module#BlogModule' },
  {
    path: AppBarRoutes.involved,
    loadChildren: './get-involved/get-involved.module#GetInvolvedModule'
  },
  {
    path: AppBarRoutes.contact,
    loadChildren: './contact-us/contact-us.module#ContactUsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
