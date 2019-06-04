import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../shared/models/data-service.model';
import { CountrySupporter } from '../shared/models/country-supporter.model';
import { FirebaseCollections } from '../shared/models/collections.constant';

@Injectable()
export class CountrySupportersService extends DataService<CountrySupporter> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.countrySupporters);
  }
}
