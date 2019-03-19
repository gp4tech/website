import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { ActivityIndicator } from '../../shared/models/activity-indicator.model';
import { DataService } from '../../shared/data-service/data.service';
import { FirebaseCollections } from '../../shared/data-service/collections';

@Injectable()
export class ActivityIndicatorsService extends DataService<ActivityIndicator> {

  constructor(private db: AngularFirestore) {
    super(db, FirebaseCollections.activityIndicators);
  }
}
