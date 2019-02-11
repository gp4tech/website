import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppBarViews } from './shared/utils';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: AppBarViews.home, component: HomeComponent },
  { path: AppBarViews.about, component: AboutUsComponent },
  //TODO: create basic components and modules
  // { path: AppBarViews.events, component: Component },
  // { path: AppBarViews.blog, component: Component },
  // { path: AppBarViews.involved, component: Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
