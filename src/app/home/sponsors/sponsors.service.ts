import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Sponsor } from '../../shared/models/sponsor.model';
import { DataService } from '../../shared/data-service/data.service';
import { FirebaseCollections } from '../../shared/data-service/collections';

@Injectable()
export class SponsorsService extends DataService<Sponsor> {
  constructor(private db: AngularFirestore) {
    super(db, FirebaseCollections.sponsors);
  }
}
