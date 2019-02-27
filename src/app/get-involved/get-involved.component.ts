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
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
      ],
      columnNames: ['Country', 'Popularity'],
    };
  }
}
