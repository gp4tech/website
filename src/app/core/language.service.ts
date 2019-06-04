import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LanguageService {
  changeLanguage$: Observable<any>;
  currentLanguage: string;
  private languageChanged: Subject<any>;

  constructor(private translateService: TranslateService) {
    this.languageChanged = new Subject<any>();
    this.changeLanguage$ = this.languageChanged.asObservable();
  }

  setDefaultLanguage(): void {
    this.translateService.setDefaultLang('en');
    this.switchLanguage(this.translateService.getBrowserLang());
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
