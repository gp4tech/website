import { Component, OnInit } from '@angular/core';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

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
    private scrollTopService: ScrollTopService,
    private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {}

  ngOnInit() {
    this.languageService.setDefaultLanguage();
    this.scrollTopService.activateScrollTop();
    this.angulartics2GoogleAnalytics.startTracking();
  }
}
