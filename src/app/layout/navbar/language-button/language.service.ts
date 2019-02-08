import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage: string;
  changeLanguajeObservable: Observable<any>;

  private changeLanguageSubject: Subject<any>;

  constructor(private translateService: TranslateService) {
    this.changeLanguageSubject = new Subject<any>();
    this.changeLanguajeObservable = this.changeLanguageSubject.asObservable();
  }

  setDefaultLanguage(): void {
    this.currentLanguage = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.currentLanguage);
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translateService.use(language);
    this.changeLanguageSubject.next(language);
  }

  getJsonValue(key: string): Observable<Array<any>> {
    return this.translateService.get(key);
  }
}
