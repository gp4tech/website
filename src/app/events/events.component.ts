import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { LanguageService } from '../layout/navbar/language-button/language.service';
import { EventsService } from './events.service';
import { Events } from '../shared/models/events.model';

@Component({
  selector: 'gp-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events$: Observable<Events[]>;
  languages = { ES: 'es', EN: 'en' };
  position = { RIGHT: 'right', LEFT: 'left' };

  constructor(private eventsService: EventsService,
              public language: LanguageService) {}

  ngOnInit() {
    this.events$ = this.eventsService.getAll();
  }
}
