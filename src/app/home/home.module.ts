import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { ActivityIndicatorsComponent } from './activity-indicators/activity-indicators.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GetInvolvedModule } from '../get-involved/get-involved.module';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ActivityIndicatorsComponent,
    TestimonialsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GetInvolvedModule,
  ]
})
export class HomeModule {}
