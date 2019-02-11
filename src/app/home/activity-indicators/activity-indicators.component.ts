import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';

import { LanguageService } from 'src/app/layout/navbar/language-button/language.service';

@Component({
  selector: 'app-activity-indicators',
  templateUrl: './activity-indicators.component.html',
  styleUrls: ['./activity-indicators.component.scss']
})
export class ActivityIndicatorsComponent implements OnInit, OnDestroy {
  activityIndicators$: Observable<any>;
  activityIndicatorSubscription: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.activityIndicators$ = this.getActivityIndicators();
    this.activityIndicatorSubscription = this.languageService.changeLanguage$.subscribe(
      () => (this.activityIndicators$ = this.getActivityIndicators())
    );
  }

  ngOnDestroy(): void {
    this.activityIndicatorSubscription.unsubscribe();
  }

  private getActivityIndicators(): Observable<any> {
    return this.languageService.getValueFromTranslation('activity-indicator');
  }
}
