import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  isCollapsed = true;
  links = [
    {
      label: 'Home',
      route: ['']
    },
    {
      label: 'About Us',
      route: '/about-us'
    },
  ];
}
