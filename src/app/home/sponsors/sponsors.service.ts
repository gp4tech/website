import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Sponsor } from '../../shared/models/sponsor.model';
import { DataService } from '../../shared/models/data-service.model';
import { FirebaseCollections } from '../../shared/models/collections.constant';

@Injectable()
export class SponsorsService extends DataService<Sponsor> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.sponsors);
  }
}
