import { Plataform } from '../implementation/plataform-interface';
import { Forms } from './forms';

export class Circulo extends Forms {
  constructor(protected plataform: Plataform) {
    super(plataform);
  }

  desenhar(): void {
    this.plataform.desenharForma('Circulo');
  }
}
