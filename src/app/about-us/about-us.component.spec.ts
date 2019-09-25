import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { AboutUsComponent } from './about-us.component';
import { MembersComponent } from './members/members.component';
import { MembersService } from './members/members.service';
import { LanguageService } from '../core/language.service';
import { PageBannerComponent } from '../shared/components/page-banner/page-banner.component';
import { CallToActionComponent } from '../shared/components/call-to-action/call-to-action.component';
import { RoleConverterPipe } from '../shared/pipes/role-converter.pipe';
import { FixUrlPipe } from './members/fix-url.pipe';
import { MissionVisionComponent } from './mission-vision/mission-vision.component';

const membersServiceMock = {
  getAll: () => of([]),
  getAllMembers: () => of([])
};

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutUsComponent,
        MembersComponent,
        PageBannerComponent,
        CallToActionComponent,
        RoleConverterPipe,
        FixUrlPipe,
        MissionVisionComponent
      ],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        {
          provide: MembersService,
          useValue: membersServiceMock
        },
        LanguageService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
