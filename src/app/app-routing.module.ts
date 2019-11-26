import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBarRoutes } from './shared/models/routes.model';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: AppBarRoutes.about,
    loadChildren: () =>
      import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: AppBarRoutes.events,
    loadChildren: () =>
      import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: AppBarRoutes.blog,
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: AppBarRoutes.who,
    loadChildren: () =>
      import('./who-did-this/who-did-this.module').then(m => m.WhoDidThisModule)
  },
  {
    path: AppBarRoutes.contact,
    loadChildren: () =>
      import('./contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
  {
    path: AppBarRoutes.getInvolved,
    loadChildren: () =>
      import('./get-involved/get-involved.module').then(m => m.GetInvolvedModule)
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
