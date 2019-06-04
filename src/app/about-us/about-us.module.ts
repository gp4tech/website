import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { MembersComponent } from './members/members.component';
import { MembersService } from './members/members.service';

@NgModule({
  declarations: [AboutUsComponent, MembersComponent],
  imports: [CommonModule, SharedModule, AboutUsRoutingModule],
  providers: [MembersService]
})
export class AboutUsModule {}
