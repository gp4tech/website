import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ActivityIndicatorsService } from './activity-indicators.service';
import { ActivityIndicator } from '../../shared/models/activity-indicator.model';

@Component({
  selector: 'gp-activity-indicators',
  templateUrl: './activity-indicators.component.html',
  styleUrls: ['./activity-indicators.component.scss']
})
export class ActivityIndicatorsComponent implements OnInit {
  activityIndicators$: Observable<ActivityIndicator[]>;

  constructor(private activityIndicatorsService: ActivityIndicatorsService) {}

  ngOnInit() {
    this.activityIndicators$ = this.activityIndicatorsService.getAll();
  }
}
