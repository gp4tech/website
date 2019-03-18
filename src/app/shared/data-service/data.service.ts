import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { DataType } from '../models/data-type.model';

export abstract class DataService<T extends DataType> {
  dataCollection: AngularFirestoreCollection<T>;

  constructor(private angularFirestoreService: AngularFirestore, collectionName: string) {
    this.dataCollection = angularFirestoreService.collection<T>(collectionName);
  }

  getAll(): Observable<T[]> {
    return this.dataCollection.valueChanges();
  }
}
