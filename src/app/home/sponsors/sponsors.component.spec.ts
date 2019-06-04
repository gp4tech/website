import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { SponsorsComponent } from './sponsors.component';
import { SponsorsService } from './sponsors.service';

const sponsorsServiceMock = {
  getAll: () => of([])
};

describe('SponsorsComponent', () => {
  let component: SponsorsComponent;
  let fixture: ComponentFixture<SponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorsComponent],
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [{ provide: SponsorsService, useValue: sponsorsServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
