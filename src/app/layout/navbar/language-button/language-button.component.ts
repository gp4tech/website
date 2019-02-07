import { Component } from '@angular/core';

import { LanguageService } from './language.service';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss']
})
export class LanguageButtonComponent {
  constructor(public language: LanguageService) {}
}
