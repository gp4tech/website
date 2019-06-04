import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { ActivityIndicator } from '../../shared/models/activity-indicator.model';
import { DataService } from '../../shared/models/data-service.model';
import { FirebaseCollections } from '../../shared/models/collections.constant';

@Injectable()
export class ActivityIndicatorsService extends DataService<ActivityIndicator> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.activityIndicators);
  }
}
