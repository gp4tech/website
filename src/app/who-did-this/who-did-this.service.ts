import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { WhoDidThis } from '../shared/models/who-did-this.model';
import { DataService } from '../shared/data-service/data.service';
import { FirebaseCollections } from '../shared/data-service/collections';

@Injectable()
export class WhoDidThisService extends DataService<WhoDidThis> {

  constructor(private db: AngularFirestore) {
    super(db, FirebaseCollections.whoDidThis);
  }
}
