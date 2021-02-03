import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodio'
})
export class EpisodioPipe implements PipeTransform {

  transform(value: string): unknown {
    const divisiones: string[] = value.split('/');
    return divisiones[divisiones.length - 1];
  }

}
