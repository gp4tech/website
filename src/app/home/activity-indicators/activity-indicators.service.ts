import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { ActivityIndicator } from '../../shared/models/activity-indicator.model';
import { DataService } from '../../shared/data-service/data.service';
import { FirebaseCollections } from '../../shared/data-service/collections';

@Injectable()
export class ActivityIndicatorsService extends DataService<ActivityIndicator> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.activityIndicators);
  }
}
