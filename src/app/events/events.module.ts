import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';
import { SharedModule } from '../shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventsService } from './events.service';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventsRoutingModule
  ],
  providers: [
    EventsService
  ]
})
export class EventsModule {}
