import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/app/shared/data.service';

export interface Indicator {
  id: string;
  label: string;
  count: number;
}
@Injectable()
export class ActivityIndicatorsService extends DataService<Indicator> {

  constructor(private db: AngularFirestore) { 
    super(db, 'activity-indicators');
  }
}
