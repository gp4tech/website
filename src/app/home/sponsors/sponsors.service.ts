import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Sponsor } from '../../shared/models/sponsor.model';
import { DataService } from '../../shared/data-service/data.service';
import { FirebaseCollections } from '../../shared/data-service/collections';

@Injectable()
export class SponsorsService extends DataService<Sponsor> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.sponsors);
  }
}
