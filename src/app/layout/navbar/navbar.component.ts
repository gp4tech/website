import { Component } from '@angular/core';
import { APP_ROUTES } from '../../shared/routes.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  appRoutes = APP_ROUTES;
  selectedRoute: string;

  onSelect(appRoute: string): void {
    this.selectedRoute = appRoute;
  }
}
