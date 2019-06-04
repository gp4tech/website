import { Component, OnInit } from '@angular/core';

import { LanguageService } from './core/language.service';

@Component({
  selector: 'gp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.setDefaultLanguage();
  }
}
