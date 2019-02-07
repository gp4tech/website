import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ActivityIndicatorsComponent } from './activity-indicators/activity-indicators.component';

@NgModule({
  declarations: [
    HomeComponent,
    ActivityIndicatorsComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
