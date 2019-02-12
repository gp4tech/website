import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    EventsComponent,
  ],
  exports: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EventsModule { }
