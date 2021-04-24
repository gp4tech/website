import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { ActivityIndicatorsComponent } from './activity-indicators.component';
import { ActivityIndicatorsService } from './activity-indicators.service';
import { LanguageService } from 'src/app/core/language.service';

const activityIndicatorsServiceMock = {
  getAll: () => of([]),
};

describe('ActivityIndicatorsComponent', () => {
  let component: ActivityIndicatorsComponent;
  let fixture: ComponentFixture<ActivityIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityIndicatorsComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        {
          provide: ActivityIndicatorsService,
          useValue: activityIndicatorsServiceMock,
        },
        LanguageService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.whenStable().then(() => fixture.detectChanges());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
