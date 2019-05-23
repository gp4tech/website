import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Member } from '../../shared/models/member.model';
import { DataService } from '../../shared/models/data-service.model';
import { FirebaseCollections } from '../../shared/models/collections.constant';

@Injectable()
export class MembersService extends DataService<Member> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.members);
  }
}
