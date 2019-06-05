import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageService } from '../language-button/language.service';
import { Donate } from 'src/app/shared/models/donate.model';
import { DonateService } from './donate.service';

@Component({
  selector: 'gp-donate-modal',
  templateUrl: './donate-modal.component.html',
  styleUrls: ['./donate-modal.component.scss']
})
export class DonateModalComponent implements OnInit {
  donate$: Observable<Donate[]>;
  currency: string = 'dollar';
  from: string = 'usa';

  constructor(private donateService: DonateService,
              public language: LanguageService) { }

  ngOnInit() {
    this.donate$ = this.donateService.getAll();
  }

  onOptionChange(option: string) {
    switch (option) {
      case 'option1': {
        this.currency = 'dollar';
        this.from = 'usa';
        break;
      }
      case 'option2': {
        this.currency = 'dollar';
        this.from = 'germany';
        break;
      }
      case 'option3': {
        this.currency = 'euros';
        this.from = 'any';
        break;
      }
      default: {
        break;
      }
    }
  }
}
