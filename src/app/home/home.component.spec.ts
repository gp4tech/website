import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { ActivityIndicatorsComponent } from './activity-indicators/activity-indicators.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GetInvolvedModule } from '../get-involved/get-involved.module';
import { ActivityIndicatorsService } from './activity-indicators/activity-indicators.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        BannerComponent,
        ActivityIndicatorsComponent,
        TestimonialsComponent
      ],
      imports: [
        GetInvolvedModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        { provide: ActivityIndicatorsService, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.whenStable().then(() => fixture.detectChanges());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
