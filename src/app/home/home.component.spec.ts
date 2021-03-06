import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
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
import { TopArticlesComponent } from '../blog/top-articles/top-articles.component';
import { ArticlesService } from '../blog/articles.service';
import { SponsorsService } from './sponsors/sponsors.service';
import { TopArticleComponent } from '../blog/top-articles/top-article/top-article.component';
import { TestimonialsService } from './testimonials/testimonials.service';
import { CallToActionModule } from '../shared/components/call-to-action/call-to-action.module';
import { LanguageService } from '../core/language.service';

const activityIndicatorsServiceMock = {
  getAll: () => of([]),
};

const countrySupportersServiceMock = {
  getAll: () => of([]),
};

const articlesServiceMock = {
  getAllArticles: () => of([]),
  getTopArticles: () => of([]),
};

const sponsorsServiceMock = {
  getAll: () => of([]),
};

const testimonialsServiceMock = {
  getAll: () => of([]),
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
        TopArticlesComponent,
        TopArticleComponent,
      ],
      imports: [
        RouterTestingModule,
        CallToActionModule,
        GetInvolvedModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        {
          provide: ActivityIndicatorsService,
          useValue: activityIndicatorsServiceMock,
        },
        {
          provide: CountrySupportersService,
          useValue: countrySupportersServiceMock,
        },
        { provide: ArticlesService, useValue: articlesServiceMock },
        {
          provide: SponsorsService,
          useValue: sponsorsServiceMock,
        },
        {
          provide: TestimonialsService,
          useValue: testimonialsServiceMock,
        },
        LanguageService,
      ],
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
