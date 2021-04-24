import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { MembersComponent } from './members.component';
import { MembersService } from './members.service';
import { LanguageService } from '../../core/language.service';
import { FixUrlPipe } from './fix-url.pipe';
import { RoleConverterPipe } from 'src/app/shared/pipes/role-converter.pipe';

const membersServiceMock = {
  getAll: () => of([]),
  getAllMembers: () => of([]),
};

describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FixUrlPipe, RoleConverterPipe, MembersComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
      providers: [
        {
          provide: MembersService,
          useValue: membersServiceMock,
        },
        LanguageService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
