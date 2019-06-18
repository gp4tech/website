import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { WhoDidThisComponent } from './who-did-this.component';
import { WebTeamMembersService } from './web-team-members.service';
import { LanguageService } from '../core/language.service';
import { PageBannerComponent } from '../shared/components/page-banner/page-banner.component';
import { CallToActionComponent } from '../shared/components/call-to-action/call-to-action.component';

const WebTeamMembersServiceMock = {
  getAll: () => of([])
};

describe('WhoDidThisComponent', () => {
  let component: WhoDidThisComponent;
  let fixture: ComponentFixture<WhoDidThisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WhoDidThisComponent,
        PageBannerComponent,
        CallToActionComponent
      ],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: WebTeamMembersService, useValue: WebTeamMembersServiceMock },
        LanguageService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoDidThisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
