import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../shared/services/data/data.service';
import { CountrySupporters } from '../shared/models/country-supporters.model';
import { FirebaseCollections } from '../shared/services/data/collections';

@Injectable()
export class CountrySupportersService extends DataService<CountrySupporters> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.countrySupporters);
  }
}
