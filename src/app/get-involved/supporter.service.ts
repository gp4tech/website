import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../shared/models/data-service.model';
import { FirebaseCollections } from '../shared/models/collections.constant';
import { Supporter } from '../shared/models/supporter';
import { CloudFunctions } from '../shared/models/cloud-functions.constant';
import { Observable } from 'rxjs';

@Injectable()
export class SupporterService extends DataService<Supporter>{
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.countrySupporters);
  }

  createSupporter(supporter: Supporter): Observable<any> {
    return this.createUsingCloudFunction(supporter, CloudFunctions.createSupporter);
  }
}
