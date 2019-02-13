import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInvolvedComponent } from './get-involved.component';
import { SharedModule } from '../shared/shared.module';
import { GetInvolvedRoutingModule } from './get-involved-routing.module';

@NgModule({
  declarations: [
    GetInvolvedComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GetInvolvedRoutingModule
  ]
})
export class GetInvolvedModule { }
