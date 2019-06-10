import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

const DEFAULT_LANGUAGES = ['en', 'es'];

@Injectable()
export class LanguageService {
  changeLanguage$: Observable<any>;
  currentLanguage: string = DEFAULT_LANGUAGES[0];
  private languageChanged: Subject<any>;

  constructor(private translateService: TranslateService) {
    this.languageChanged = new Subject<any>();
    this.changeLanguage$ = this.languageChanged.asObservable();
  }

  setDefaultLanguage(): void {
    const browserLanguage = this.translateService.getBrowserLang();
    const isValidLanguage = DEFAULT_LANGUAGES.find(defaultLanguage => defaultLanguage === browserLanguage);
    this.translateService.setDefaultLang(this.currentLanguage);
  
    if (isValidLanguage) {
      this.switchLanguage(browserLanguage);
    }
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translateService.use(language);
    this.languageChanged.next(language);
  }

  getValueFromTranslation(key: string): Observable<any> {
    return this.translateService.get(key);
  }
}
