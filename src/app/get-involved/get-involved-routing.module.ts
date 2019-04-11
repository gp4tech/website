import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetInvolvedComponent } from './get-involved.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

const routes: Routes = [
  {
    path: '',
    component: GetInvolvedComponent
  },
  {
    path: 'subscribe',
    component: SubscribeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetInvolvedRoutingModule {}
