import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { ActivityIndicatorsService } from './activity-indicators.service';
import { ActivityIndicator } from '../../shared/models/activity-indicator.model';

@Component({
  selector: 'gp-activity-indicators',
  templateUrl: './activity-indicators.component.html',
  styleUrls: ['./activity-indicators.component.scss']
})
export class ActivityIndicatorsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  activityIndicators$: Observable<ActivityIndicator[]>;

  constructor(private activityIndicatorsService: ActivityIndicatorsService) {}

  ngOnInit() {
    this.activityIndicators$ = this.activityIndicatorsService.getAll();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
