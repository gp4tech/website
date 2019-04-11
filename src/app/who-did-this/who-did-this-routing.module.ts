import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoDidThisComponent } from './who-did-this.component';

const routes: Routes = [
  {
    path: '',
    component: WhoDidThisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoDidThisRoutingModule { }
