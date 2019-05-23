import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Md5 } from 'ts-md5';

import { Member } from '../../shared/models/member.model';
import { DataService } from '../../shared/models/data-service.model';
import { FirebaseCollections } from '../../shared/models/collections.constant';

@Injectable()
export class MembersService extends DataService<Member> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.members);
  }

  getAllMembers(): Observable<Member[]> {
    return this.angularFirestoreService
      .collection<Member>(this.collectionName, ref =>
        ref.orderBy('displayName', 'asc')
      )
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const md5 = new Md5();
            const data = a.payload.doc.data() as Member;
            md5.appendStr(data.email);
            data.picture = `https://www.gravatar.com/avatar/${md5.end()}?s=300&d=mp`;
            return data;
          })
        )
      );
  }
}
