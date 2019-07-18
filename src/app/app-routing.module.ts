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
    path: AppBarRoutes.who,
    loadChildren: './who-did-this/who-did-this.module#WhoDidThisModule'
  },
  {
    path: AppBarRoutes.contact,
    loadChildren: './contact-us/contact-us.module#ContactUsModule'
  },
  // TODO 07182019: Determine what will happen with donations
  // {
  //   path: AppBarRoutes.donate,
  //   loadChildren: './donate/donate.module#DonateModule'
  // },
  {
    path: '**',
    // TODO 06172019: Create a 404 component
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
