import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

import { Testimonials } from '../../shared/models/testimonials.model';
import { DataService } from '../../shared/models/data-service.model';
import { FirebaseCollections } from '../../shared/models/collections.constant';

@Injectable()
export class TestimonialsService extends DataService<Testimonials>{

  constructor(http: HttpClient, db: AngularFirestore) {
    super(http, db, FirebaseCollections.testimonials);
  }
}

