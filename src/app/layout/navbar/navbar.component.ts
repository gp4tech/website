import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {

  constructor(private translateService: TranslateService) {
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
