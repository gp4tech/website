import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixUrl',
})
export class FixUrlPipe implements PipeTransform {
  transform(value: string, url: string): any {
    if (!value.trim().toLowerCase().startsWith('http')) {
      return url + value;
    }

    return value;
  }
}
