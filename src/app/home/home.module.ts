import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticlesService } from '../blog/articles.service';
import { SharedModule } from '../shared/shared.module';
import { BlogModule } from '../blog/blog.module';
import { GetInvolvedModule } from '../get-involved/get-involved.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { ActivityIndicatorsComponent } from './activity-indicators/activity-indicators.component';
import { ActivityIndicatorsService } from './activity-indicators/activity-indicators.service';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TestimonialsService } from './testimonials/testimonials.service';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorsService } from './sponsors/sponsors.service';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ActivityIndicatorsComponent,
    TestimonialsComponent,
    SponsorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    GetInvolvedModule,
    BlogModule
  ],
  providers: [ActivityIndicatorsService, ArticlesService, SponsorsService, TestimonialsService]
})
export class HomeModule {}
