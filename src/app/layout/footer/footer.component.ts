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
      label: '',
      link: "https://www.instagram.com/gp4tech",
    },
    {
      faIcon: 'fa-facebook',
      label: '',
      link: "https://www.facebook.com/GP4TechJala",
    },
    {
      faIcon: 'fa-twitter',
      label: '',
      link: "https://twitter.com/GirlPowerJala",
    }
  ];

  infoLinks = [
    {
      faIcon: '',
      label: 'links.who-did-this',
      link: "#",
    },
    {
      faIcon: '',
      label: 'links.contact-us',
      link: "#",
    },
  ]
}
