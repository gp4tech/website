import { Component, OnInit } from '@angular/core';

import { LanguageService } from './core/language.service';
import { ScrollTopService } from './core/scroll-top.service';

@Component({
  selector: 'gp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
    private scrollTopService: ScrollTopService
  ) {}

  ngOnInit() {
    this.languageService.setDefaultLanguage();
    this.scrollTopService.activateScrollTop();
  }
}
