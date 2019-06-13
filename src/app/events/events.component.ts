import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageService } from '../core/language.service';
import { EventsService } from './events.service';
import { Event } from '../shared/models/event.model';

@Component({
  selector: 'gp-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events$: Observable<Event[]>;
  languages = { ES: 'es', EN: 'en' };

  constructor(private eventsService: EventsService,
              public language: LanguageService) {}

  ngOnInit() {
    this.events$ = this.eventsService.getActivities();
  }
}
