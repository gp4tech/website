import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../shared/models/data-service.model';
import { WebTeamMembers } from '../shared/models/web-team-members.model';
import { FirebaseCollections } from '../shared/models/collections.constant';

@Injectable()
export class WebTeamMembersService extends DataService<WebTeamMembers> {
  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.webTeamMembers);
  }
}
