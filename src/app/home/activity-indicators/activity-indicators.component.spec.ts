import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';

import { ActivityIndicatorsComponent } from './activity-indicators.component';
import { ActivityIndicatorsService } from './activity-indicators.service';

describe('ActivityIndicatorsComponent', () => {
  let component: ActivityIndicatorsComponent;
  let fixture: ComponentFixture<ActivityIndicatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityIndicatorsComponent],
      imports: [
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
    fixture = TestBed.createComponent(ActivityIndicatorsComponent);
    component = fixture.componentInstance;
    fixture.whenStable().then(() => fixture.detectChanges());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
