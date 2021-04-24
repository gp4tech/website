import { Component } from '@angular/core';

import { AppRoutes } from '../../shared/models/routes.model';

@Component({
  selector: 'gp-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  appRoutes = AppRoutes;
  selectedRoute: string;

  onSelect(appRoute: string): void {
    this.selectedRoute = appRoute;
  }
}
