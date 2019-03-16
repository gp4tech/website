import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { LanguageService } from 'src/app/layout/navbar/language-button/language.service';
import { ActivityIndicatorsService, Indicator } from './activity-indicators.service';

@Component({
  selector: 'app-activity-indicators',
  templateUrl: './activity-indicators.component.html',
  styleUrls: ['./activity-indicators.component.scss']
})
export class ActivityIndicatorsComponent implements OnInit {
  activityIndicators$: Observable<Indicator[]>;

  constructor(private activityIndicatorsService: ActivityIndicatorsService) {}

  ngOnInit(): void {
    this.activityIndicators$ = this.activityIndicatorsService.getAll();
  }
}
