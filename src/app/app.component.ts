import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  language = navigator.language.split(/[-_]/)[0];
  constructor(private translate: TranslateService) {
    this.translate.use(this.language);
  }
}
