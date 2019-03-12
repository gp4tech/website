import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [AboutUsComponent, MembersComponent],
  imports: [CommonModule, SharedModule, AboutUsRoutingModule]
})
export class AboutUsModule {}
