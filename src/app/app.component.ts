import { Component } from '@angular/core';

import { LanguageService } from './layout/navbar/language-button/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(languageService: LanguageService) {
    languageService.setDefaultLanguage();
  }
}
