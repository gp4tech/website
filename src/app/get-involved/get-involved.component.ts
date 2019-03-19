import { Component, OnInit, OnDestroy } from '@angular/core';

import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { CountrySupportersService } from './country-supporters.service';
import { GeoChartConfig } from './chart-configuration';

@Component({
  selector: 'gp-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isLoading = true;
  data;
  chart;

  constructor(private countrySupportersService: CountrySupportersService) { }

  ngOnInit() {
    this.subscription = this.countrySupportersService.getAll()
    .pipe(
      map((countrySupporters) =>
      countrySupporters.map(({count, country}) => [country, count, this.generateHtmlTooltip(country, count)])
      ))
      .subscribe((supporters) => {
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

  generateHtmlTooltip(countryName, countryCount) {
    return `<div>
      <p style="font-size: 15px;"><b>${countryName}</b></p>
      <p>People Involved<br/> ${countryCount}</p>
    </div>`;
  }
}
