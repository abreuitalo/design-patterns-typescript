import { Plataform } from './plataform-interface';

export class LinuxPlataform implements Plataform {
  desenharForma(form: string): void {
    console.log(`Linux está desenhando ${form}`);
  }
}
