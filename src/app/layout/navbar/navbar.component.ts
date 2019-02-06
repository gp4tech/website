import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  language = navigator.language.split(/[-_]/)[0];
  constructor(private translate: TranslateService) {
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
