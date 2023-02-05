import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringEncode',
})
export class StringEncodePipe implements PipeTransform {
  transform(value: string): string {
    const result = [...value]
      .map((letter) => String(letter.charCodeAt(0) - 58) + ' ')
      .join('');
    return result;
  }
}
