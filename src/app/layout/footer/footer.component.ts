import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'gp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  sponsors = [
    {
      logoUrl:
        environment.firebaseStorageUrl +
        'images%2Fsponsors%2Ffundacion-jala-logo-white.png?alt=media',
      i18n: 'jala-foundation',
      link: 'http://fundacion-jala.org/#/es/home',
    },
    {
      logoUrl:
        environment.firebaseStorageUrl +
        'images%2Fsponsors%2Fjalasoft-logo-white.png?alt=media',
      i18n: 'jala',
      link: 'http://www.jalasoft.com/',
    },
  ];

  socialLinks = [
    {
      icon: 'instagram.png',
      i18n: '',
      link: 'https://www.instagram.com/gp4tech',
    },
    {
      icon: 'facebook.png',
      i18n: '',
      link: 'https://www.facebook.com/GP4TechJala',
    },
    {
      icon: 'twitter.png',
      i18n: '',
      link: 'https://twitter.com/GirlPowerJala',
    },
  ];

  whoDidThis = {
    icon: 'who-did-this.png',
    i18n: 'links.who-did-this',
    link: 'who-did-this',
  };
}
