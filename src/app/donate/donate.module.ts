import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { DonateService } from './donate.service';

@NgModule({
  declarations: [DonateComponent],
  imports: [CommonModule, DonateRoutingModule, SharedModule],
  providers: [DonateService],
})
export class DonateModule {}
