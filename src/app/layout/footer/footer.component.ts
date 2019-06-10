import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'gp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  sponsors = [
    {
      logoUrl: environment.firebaseStorageUrl +
        'images%2Fsponsors%2Ffundacion-jala-logo-white.png?alt=media',
      i18n: 'jala-foundation',
      link: 'http://fundacion-jala.org/#/es/home',
    },
    {
      logoUrl: environment.firebaseStorageUrl +
        'images%2Fsponsors%2Fjalasoft-logo-white.png?alt=media',
      i18n: 'jala',
      link: 'http://www.jalasoft.com/',
    }
  ];

  socialLinks = [
    {
      faIcon: 'fa-instagram',
      i18n: '',
      link: 'https://www.instagram.com/gp4tech',
    },
    {
      faIcon: 'fa-facebook',
      i18n: '',
      link: 'https://www.facebook.com/GP4TechJala',
    },
    {
      faIcon: 'fa-twitter',
      i18n: '',
      link: 'https://twitter.com/GirlPowerJala',
    }
  ];

  donation = {
      faIcon: 'fa-donate',
      i18n: 'links.donate',
      link: 'donations',
  };

  infoLinks = [
    {
      faIcon: '',
      i18n: 'links.who-did-this',
      link: 'who-did-this',
    },
    {
      faIcon: '',
      i18n: 'links.contact-us',
      link: 'contact-us',
    },
  ];
}
