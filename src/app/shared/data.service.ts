import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export abstract class DataType {
  id: string;
}

export abstract class DataService<T extends DataType> {
  dataCollection: AngularFirestoreCollection<T>;
  
  constructor(private angularFirestoreService: AngularFirestore, collectionName: string) {
    this.dataCollection = angularFirestoreService.collection<T>(collectionName);
  }

  getAll(): Observable<T[]> {
    return this.dataCollection.valueChanges();
  }
}
