import { TestBed } from '@angular/core/testing';

import {
  TranslateLoader,
  TranslateModule,
  TranslateFakeLoader
} from '@ngx-translate/core';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ]
    })
  );

  it('should be created', () => {
    const service: LanguageService = TestBed.get(LanguageService);
    expect(service).toBeTruthy();
  });
});
