import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ActivityIndicatorsComponent } from './activity-indicators/activity-indicators.component';

@NgModule({
  declarations: [HomeComponent, ActivityIndicatorsComponent],
  imports: [CommonModule, SharedModule]
})
export class HomeModule {}
