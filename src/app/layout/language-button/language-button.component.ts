import { Component } from '@angular/core';

import { LanguageService } from '../../core/language.service';

@Component({
  selector: 'gp-language-button',
  templateUrl: './language-button.component.html',
  styleUrls: ['./language-button.component.scss'],
})
export class LanguageButtonComponent {
  constructor(public language: LanguageService) {}
}
