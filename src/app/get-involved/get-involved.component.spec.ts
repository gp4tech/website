import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { GetInvolvedComponent } from './get-involved.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GetInvolvedService } from './country-supporters.service';

const getInvolvedServiceMock = {
  getInvolvedPeopleByCountry: () => of([])
};

describe('GetInvolvedComponent', () => {
  let component: GetInvolvedComponent;
  let fixture: ComponentFixture<GetInvolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), GoogleChartsModule],
      declarations: [GetInvolvedComponent],
      providers: [{ provide: GetInvolvedService, useValue: getInvolvedServiceMock}]
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
