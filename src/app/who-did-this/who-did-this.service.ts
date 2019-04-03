import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../shared/models/data-service.model';
import { WhoDidThis } from '../shared/models/who-did-this.model';
import { FirebaseCollections } from '../shared/models/collections.constant';

@Injectable()
export class WhoDidThisService extends DataService<WhoDidThis> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.whoDidThis);
  }
}
