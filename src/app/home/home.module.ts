import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ActivityIndicatorsComponent } from './activity-indicators/activity-indicators.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [HomeComponent, ActivityIndicatorsComponent, BannerComponent],
  imports: [CommonModule, SharedModule]
})
export class HomeModule {}
