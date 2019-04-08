import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { TranslateModule } from '@ngx-translate/core';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, ContactUsRoutingModule, TranslateModule, AgmCoreModule.forRoot({
    apiKey: 'AIzaSyADUoJIUPQirHp0XmLZ76ib9X_joZgMkIw'
  })]
})
export class ContactUsModule {}
