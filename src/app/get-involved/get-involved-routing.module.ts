import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetInvolvedComponent } from './get-involved.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
    path: 'supporter',
    component: SubscribeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetInvolvedRoutingModule {}
