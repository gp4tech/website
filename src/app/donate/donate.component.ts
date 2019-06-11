import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Donate } from './../shared/models/donate.model';
import { DonateService } from './donate.service';
import { LanguageService } from '../core/language.service';

@Component({
  selector: 'gp-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  donate$: Observable<Donate[]>;
  currency = 'dollar';
  from = 'usa';

  constructor(private donateService: DonateService,
              public language: LanguageService ) { }

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
