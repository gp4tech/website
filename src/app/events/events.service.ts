import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../shared/models/data-service.model';
import { Events } from '../shared/models/events.model';
import { FirebaseCollections } from '../shared/models/collections.constant';

@Injectable()
export class EventsService extends DataService<Events> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.events);
  }
}