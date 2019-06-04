import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { EmailService } from '../core/email.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    FormsModule,
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot(environment.googleMaps)
  ],
  providers: [EmailService]
})
export class ContactUsModule {}
