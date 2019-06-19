import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataService } from '../shared/models/data-service.model';
import { Event } from '../shared/models/event.model';
import { FirebaseCollections } from '../shared/models/collections.constant';
import { DataOrder } from '../shared/models/data-type.model';

@Injectable()
export class EventsService extends DataService<Event> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.events);
  }

  getActivities(): Observable<Event[]> {
    return this.getAllSorted('order', DataOrder.asc).pipe(
      map(activities => {
        return activities;
      })
    );
  }
}
