import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleChartsModule } from 'angular-google-charts';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { GetInvolvedComponent } from './get-involved.component';
import { CountrySupportersService } from './country-supporters.service';
import { SharedModule } from '../shared/shared.module';

const countrySupportersServiceMock = {
  getAll: () => of([])
};

describe('GetInvolvedComponent', () => {
  let component: GetInvolvedComponent;
  let fixture: ComponentFixture<GetInvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        GoogleChartsModule,
        SharedModule,
        RouterTestingModule
      ],
      declarations: [GetInvolvedComponent],
      providers: [
        { provide: CountrySupportersService, useValue: countrySupportersServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
