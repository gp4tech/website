import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { DonateComponent } from './donate.component';
import { DonateService } from './donate.service';
import { LanguageService } from '../core/language.service';
import { PageBannerComponent } from '../shared/components/page-banner/page-banner.component';
import { CallToActionComponent } from '../shared/components/call-to-action/call-to-action.component';

const DonateServiceMock = {
  getAll: () => of([])
};

describe('DonateComponent', () => {
  let component: DonateComponent;
  let fixture: ComponentFixture<DonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DonateComponent,
        PageBannerComponent,
        CallToActionComponent
      ],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: DonateService, useValue: DonateServiceMock },
        LanguageService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
