import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCase',
  standalone: true
})
export class LowerCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
