import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleChartsModule } from 'angular-google-charts';

import { GetInvolvedComponent } from './get-involved.component';
import { SharedModule } from '../shared/shared.module';
import { GetInvolvedRoutingModule } from './get-involved-routing.module';
import { CountrySupportersService } from './country-supporters.service';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

@NgModule({
  declarations: [GetInvolvedComponent, SubscribeFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    GetInvolvedRoutingModule,
    GoogleChartsModule.forRoot()
  ],
  exports: [GetInvolvedComponent],
  providers: [CountrySupportersService]
})
export class GetInvolvedModule {}
