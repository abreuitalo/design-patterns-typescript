import { Plataform } from './plataform-interface';

export class WindowsPlataform implements Plataform {
  desenharForma(form: string): void {
    console.log(`Windows está desenhando ${form}`);
  }
}
