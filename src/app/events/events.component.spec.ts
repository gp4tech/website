import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { EventsComponent } from './events.component';
import { EventsService } from './events.service';
import { LanguageService } from '../core/language.service';
import { PageBannerComponent } from '../shared/components/page-banner/page-banner.component';
import { CallToActionComponent } from '../shared/components/call-to-action/call-to-action.component';

const EventsServiceMock = {
  getActivities: () => of([])
};

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventsComponent,
        PageBannerComponent,
        CallToActionComponent
      ],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: EventsService, useValue: EventsServiceMock },
        LanguageService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
