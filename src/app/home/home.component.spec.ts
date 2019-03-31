import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { ActivityIndicatorsComponent } from './activity-indicators/activity-indicators.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GetInvolvedModule } from '../get-involved/get-involved.module';
import { ActivityIndicatorsService } from './activity-indicators/activity-indicators.service';
import { CountrySupportersService } from '../get-involved/country-supporters.service';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { TopBlogsComponent } from '../blog/top-blogs/top-blogs.component';
import { BlogsService } from '../blog/blogs.service';
import { SponsorsService } from './sponsors/sponsors.service';

const activityIndicatorsServiceMock = {
  getAll: () => of([])
};

const countrySupportersServiceMock = {
  getAll: () => of([])
};

const blogsServiceMock = {
  getTopBlogs: () => of([])
};

const sponsorsServiceMock = {
  getAll: () => of([])
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        BannerComponent,
        ActivityIndicatorsComponent,
        TestimonialsComponent,
        SponsorsComponent,
        TopBlogsComponent
      ],
      imports: [
        GetInvolvedModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        {
          provide: ActivityIndicatorsService,
          useValue: activityIndicatorsServiceMock
        },
        {
          provide: CountrySupportersService,
          useValue: countrySupportersServiceMock
        },
        { provide: BlogsService, useValue: blogsServiceMock },
        {
          provide: SponsorsService,
          useValue: sponsorsServiceMock
        }
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
