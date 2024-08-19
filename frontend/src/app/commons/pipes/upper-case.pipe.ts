import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase',
  standalone: true,
})
export class UpperCasePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string | null {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return null;
  }
}
