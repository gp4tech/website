import { Component } from '@angular/core';
import { VIEWS } from '../../shared/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  views = VIEWS
  selectedView: string;

  onSelect(view: string): void {
    this.selectedView = view
  }
}
