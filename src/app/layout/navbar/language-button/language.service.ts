import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLanguage: string;

  constructor(private translateService: TranslateService) {}

  setDefaultLanguage(): void {
    this.currentLanguage = this.translateService.getBrowserLang();
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.currentLanguage);
  }

  switchLanguage(language: string): void {
    this.currentLanguage = language;
    this.translateService.use(language);
  }
}
