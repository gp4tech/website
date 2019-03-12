import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GetInvolvedService {
  constructor(private db: AngularFirestore) {}

  getInvolvedPeopleByCountry(): Observable<any> {
    return this.db.collection('supporters-count').get()
      .pipe(map((supportersCount) => supportersCount.docs
        .map(document => [ document.data().country, document.data().count ])));
  }
}
