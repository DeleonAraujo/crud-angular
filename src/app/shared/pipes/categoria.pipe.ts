import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Front-end': return 'code';
      case 'Back-end': return 'computer';
      case 'Infraestrutura': return 'settings';
      case 'Banco de dados': return 'storage';
    }
    return 'info';
  }

}
