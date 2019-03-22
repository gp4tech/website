import { HttpClient } from '@angular/common/http';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { DataType } from '../models/data-type.model';
import { environment } from 'src/environments/environment';

export abstract class DataService<T extends DataType> {
  dataCollection: AngularFirestoreCollection<T>;

  constructor(
    protected http: HttpClient,
    protected angularFirestoreService: AngularFirestore,
    protected collectionName: string
  ) {
    this.dataCollection = angularFirestoreService.collection<T>(collectionName);
  }

  getAll(): Observable<T[]> {
    return this.dataCollection.valueChanges();
  }

  updateUsingCloudFunction(id: string, functionName: string): Observable<T> {
    const url = `${environment.functionsUrl}/${functionName}`;
    const data: DataType = { id };

    return this.http.post<T>(url, data);
  }
}
