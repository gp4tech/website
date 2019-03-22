import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'gp-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  baseUrl = environment.firebaseStorageUrl;
  sponsors = [
    {
      label: 'Fundacion Jala',
      imgPath:
        'images%2Fsponsors%2Ffundacion-jala-logo.png?alt=media&token=94209f1b-a11d-44b6-8a83-7592f08bc738',
      link: 'http://fundacion-jala.org'
    },
    {
      label: 'Jalasoft',
      imgPath:
        'images%2Fsponsors%2Fjala-logo.png?alt=media&token=9e02c4c4-b63d-4257-baf3-df76adc9b3a1',
      link: 'http://www.jalasoft.com/'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
