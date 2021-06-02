import { Pipe, PipeTransform } from '@angular/core';
import { Dir } from '../interfaces/dirvideos.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: Dir): string {

    if (value.miniatura != null) {
      return value.miniatura;

    } else {
      return "./assets/miniatura_default.png";

    }
  }

}
