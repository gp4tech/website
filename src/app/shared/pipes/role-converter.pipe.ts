import { Pipe, PipeTransform } from '@angular/core';

import { MEMBER_ROLES } from '../models/member.model';

@Pipe({
  name: 'roleConverter',
})
export class RoleConverterPipe implements PipeTransform {
  transform(value: any): any {
    return MEMBER_ROLES[value] || value;
  }
}
