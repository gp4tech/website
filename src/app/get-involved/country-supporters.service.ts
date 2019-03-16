import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { DataService } from '../shared/data-service/data.service';

interface CountrySupporters {
  id: string;
  country: string;
  count: number;
}

@Injectable()
export class CountrySupportersService extends DataService<CountrySupporters> {
  constructor(private db: AngularFirestore) {
    super(db, 'country-supporters');
  }
}
