import { Component, Input } from '@angular/core';

@Component({
  selector: 'gp-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() linkText: string;
  @Input() link: string;
  @Input() picture = 'assets/images/GP4Tech-Team.jpg';
}
