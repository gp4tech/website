import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.scss']
})
export class GetInvolvedComponent implements OnInit {

  chart;

  ngOnInit() {
    this.chart = {
      title: 'Get involved',
      type: 'GeoChart',
      data: [
        ['Germany', 1],
        ['United States', 700],
        ['Brazil', 50],
        ['Canada', 100],
        ['France', 0],
        ['RU', 0],
        ['Bolivia', 1000]
      ],
      columnNames: ['Country', 'Involved People'],
      options: {
        colorAxis: {colors: ['#fce4ec', '#e91e63']}
      }
    };
  }
}
