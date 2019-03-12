import { Component, OnInit } from '@angular/core';

import { GetInvolvedService } from './get-involved.service';
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

  constructor(private getInvolvedService: GetInvolvedService) { }

  ngOnInit() {
    this.getInvolvedService.getInvolvedPeopleByCountry()
      .subscribe((involvedPeopleByCountry) => {
        this.isLoading = false;
        this.data = involvedPeopleByCountry
          .map(([countryName, countryCount]) => [
            countryName,
            countryCount,
            this.generateHtmlTooltip(countryName, countryCount)
          ]);
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
