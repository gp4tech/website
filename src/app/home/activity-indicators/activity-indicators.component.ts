import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { ActivityIndicatorsService } from './activity-indicators.service';
import { ActivityIndicator } from "./activity-indicator";

@Component({
  selector: 'app-activity-indicators',
  templateUrl: './activity-indicators.component.html',
  styleUrls: ['./activity-indicators.component.scss']
})
export class ActivityIndicatorsComponent implements OnInit {
  activityIndicators$: Observable<ActivityIndicator[]>;

  constructor(private activityIndicatorsService: ActivityIndicatorsService) {}

  ngOnInit(): void {
    this.activityIndicators$ = this.activityIndicatorsService.getAll();
  }
}
