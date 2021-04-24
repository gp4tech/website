import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';

import { ContactUsComponent } from './contact-us.component';
import { EmailService } from '../core/email.service';
import { PageBannerComponent } from '../shared/components/page-banner/page-banner.component';
import { CallToActionComponent } from '../shared/components/call-to-action/call-to-action.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactUsComponent,
        PageBannerComponent,
        CallToActionComponent,
      ],
      imports: [
        FormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        AgmCoreModule.forRoot({
          apiKey: '',
        }),
      ],
      providers: [EmailService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
