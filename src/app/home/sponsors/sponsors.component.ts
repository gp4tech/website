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
        'images%2Fsponsors%2Ffundacion-jala-logo.png?alt=media&token=95701108-86b9-46d3-84f8-a1a01d951fb3 ',
      link: 'http://fundacion-jala.org'
    },
    {
      label: 'Jalasoft',
      imgPath:
        'images%2Fsponsors%2Fjalasoft-logo.png?alt=media&token=5801be77-50ab-4834-beba-aad687c52311',
      link: 'http://www.jalasoft.com/'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
