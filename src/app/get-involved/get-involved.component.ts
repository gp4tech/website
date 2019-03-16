import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { CountrySupportersService } from './country-supporters.service';
import { GEOCHART_CONFIG } from './chart-configuration.model';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit {

  isLoading = true;
  data;
  chart;

  constructor(private countrySupportersService: CountrySupportersService) { }

  ngOnInit() {
    this.countrySupportersService.getAll()
      .pipe(
        map((countrySupporters) =>
          countrySupporters.map(({count, country}) => [country, count, this.generateHtmlTooltip(country, count)])
      ))
      .subscribe((supporters) => {
        this.isLoading = false;
        this.data = supporters;
        this.chart = Object.assign({ data: this.data }, GEOCHART_CONFIG);
      });
  }

  generateHtmlTooltip(countryName, countryCount) {
    return `<div>
      <p style="font-size: 15px;"><b>${countryName}</b></p>
      <p>People Involved<br/> ${countryCount}</p>
    </div>`;
  }
}
