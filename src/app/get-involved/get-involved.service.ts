import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';

@Injectable()
export class GetInvolvedService {
  getInvolvedPeopleByCountry(): Observable<any[]> {
    // TODO: Hardcoded data that will be removed when firebase datastorage gets configured.
    return of([
      ['Germany', 1],
      ['United States', 700],
      ['Brazil', 50],
      ['Canada', 100],
      ['France', 0],
      ['RU', 0],
      ['Bolivia', 1000]
    ]);
  }
}
