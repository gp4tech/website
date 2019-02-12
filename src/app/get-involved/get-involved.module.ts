import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetInvolvedComponent } from './get-involved.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GetInvolvedComponent
  ],
  exports: [
    GetInvolvedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GetInvolvedModule { }
