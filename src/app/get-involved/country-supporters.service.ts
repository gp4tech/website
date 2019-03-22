import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../shared/data-service/data.service';
import { CountrySupporters } from '../shared/models/country-supporters.model';
import { FirebaseCollections } from '../shared/data-service/collections';

@Injectable()
export class CountrySupportersService extends DataService<CountrySupporters> {
  constructor(private db: AngularFirestore) {
    super(db, FirebaseCollections.countrySupporters);
  }
}
