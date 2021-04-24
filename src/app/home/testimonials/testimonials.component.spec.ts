import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  TranslateModule,
  TranslateLoader,
  TranslateFakeLoader,
} from '@ngx-translate/core';
import { of } from 'rxjs';

import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsService } from './testimonials.service';
import { LanguageService } from 'src/app/core/language.service';

const testimonialsServiceMock = {
  getAll: () => of([]),
};

describe('TestimonialsComponent', () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsComponent],
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: TestimonialsService, useValue: testimonialsServiceMock },
        LanguageService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
