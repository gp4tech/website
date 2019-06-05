import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../../../shared/models/data-service.model';
import { Donate } from 'src/app/shared/models/donate.model';
import { FirebaseCollections } from '../../../shared/models/collections.constant';

@Injectable({
  providedIn: 'root'
})
export class DonateService extends DataService<Donate> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.donate);
  }
}
