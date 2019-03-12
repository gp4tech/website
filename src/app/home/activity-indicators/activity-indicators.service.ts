import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ActivityIndicatorsService {

  constructor(private db: AngularFirestore) { }

  getAll(): Observable<any> {
    return this.db.collection('activity-indicators').get()
      .pipe(map((indicators) => indicators.docs.map(document => document.data())));
  }
}
