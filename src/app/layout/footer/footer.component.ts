import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialLinks = [
    {
      faIcon: 'fa-instagram',
      i18n: '',
      link: "https://www.instagram.com/gp4tech",
    },
    {
      faIcon: 'fa-facebook',
      i18n: '',
      link: "https://www.facebook.com/GP4TechJala",
    },
    {
      faIcon: 'fa-twitter',
      i18n: '',
      link: "https://twitter.com/GirlPowerJala",
    }
  ];

  infoLinks = [
    {
      faIcon: '',
      i18n: 'links.who-did-this',
      link: "who-did-this",
    },
    {
      faIcon: '',
      i18n: 'links.contact-us',
      link: "contact-us",
    },
  ]
}
