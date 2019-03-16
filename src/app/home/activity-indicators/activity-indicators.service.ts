import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { ActivityIndicator } from './activity-indicator';
import { DataService } from '../../shared/data-service/data.service';
import { FIREBASE_COLLECTIONS } from '../../shared/data-service/collections';

@Injectable()
export class ActivityIndicatorsService extends DataService<ActivityIndicator> {

  constructor(private db: AngularFirestore) { 
    super(db, FIREBASE_COLLECTIONS.activityIndicators);
  }
}
