import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { map } from 'rxjs/operators';
import { Subscription, combineLatest } from 'rxjs';

import { CountrySupportersService } from './country-supporters.service';
import { GeoChartConfig } from './chart-configuration';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gp-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit, OnDestroy {
  @Input() enableMapContainer = true;
  subscription: Subscription;
  isLoading = true;
  data: any;
  chart: any;

  constructor(
    private countrySupportersService: CountrySupportersService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.subscription = combineLatest([
      this.countrySupportersService.getAll(),
      this.translateService.get('get-involved.people-involved')
    ])
      .pipe(
        map(([countrySupporters, peopleInvolvedTranslation]) =>
          countrySupporters.map(({ count, country }) => [
            country,
            count,
            this.generateHtmlTooltip(country, count, peopleInvolvedTranslation)
          ])
        )
      )
      .subscribe(supporters => {
        this.isLoading = false;
        this.data = supporters;
        this.chart = Object.assign({ data: this.data }, GeoChartConfig);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  generateHtmlTooltip(
    countryName: string,
    countryCount: number,
    peopleInvolvedTranslation: string
  ) {
    return `<div>
      <p style="font-size: 15px;"><b>${countryName}</b></p>
      <p>${peopleInvolvedTranslation}<br/> ${countryCount}</p>
    </div>`;
  }
}
