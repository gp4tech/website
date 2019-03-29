import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { WhoDidThisRoutingModule } from './who-did-this-routing.module';
import { WhoDidThisComponent } from './who-did-this.component';
import { WhoDidThisService } from './who-did-this.service';

@NgModule({
  declarations: [
    WhoDidThisComponent
  ],
  imports: [
    CommonModule,
    WhoDidThisRoutingModule,
    SharedModule
  ],
  providers: [
    WhoDidThisService
  ]
})
export class WhoDidThisModule { }
