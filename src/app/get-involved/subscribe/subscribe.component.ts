import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SupporterService } from '../supporter.service';
import { Supporter } from 'src/app/shared/models/supporter';

@Component({
  selector: 'gp-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent {
  constructor(
    private supporterService: SupporterService,
    private router: Router,
  ) {}

  onSubscriptionSubmittedManually(supporter: Supporter) {
    this.supporterService.createSupporter(supporter).subscribe(
      (_) => this.router.navigate(['/']),
      (error) => {
        if (error === 'EXISTANT_SUPPORTER') {
          console.error('existant supporter');
        }
      },
    );
  }
}
