import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage: string;
  changeLanguage$: Observable<any>;

  private changeLanguageSubject: Subject<any>;

  constructor(private translateService: TranslateService) {
    this.changeLanguageSubject = new Subject<any>();
    this.changeLanguage$ = this.changeLanguageSubject.asObservable();
  }

  setDefaultLanguage(): void {
    this.translateService.setDefaultLang('en');
    this.switchLanguage(this.translateService.getBrowserLang());
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translateService.use(language);
    this.changeLanguageSubject.next(language);
  }

  getValueFromTranslation(key: string): Observable<any> {
    return this.translateService.get(key);
  }
}
