import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Members } from '../../shared/models/members.model';
import { DataService } from '../../shared/models/data-service.model';
import { FirebaseCollections } from '../../shared/models/collections.constant';

@Injectable({
  providedIn: 'root'
})
export class MembersService extends DataService<Members>{

  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.members);
   }
}
