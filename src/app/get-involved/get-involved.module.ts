import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GoogleChartsModule } from 'angular-google-charts';

import { GetInvolvedComponent } from './get-involved.component';
import { SharedModule } from '../shared/shared.module';
import { GetInvolvedRoutingModule } from './get-involved-routing.module';
import { CountrySupportersService } from './country-supporters.service';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SupporterService } from './supporter.service';

@NgModule({
  declarations: [
    GetInvolvedComponent,
    SubscribeFormComponent,
    SubscribeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    GetInvolvedRoutingModule,
    GoogleChartsModule.forRoot(),
  ],
  exports: [GetInvolvedComponent],
  providers: [CountrySupportersService, SupporterService],
})
export class GetInvolvedModule {}
