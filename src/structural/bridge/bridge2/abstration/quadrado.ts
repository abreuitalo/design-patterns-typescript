import { Plataform } from '../implementation/plataform-interface';
import { Forms } from './forms';

export class Quadrado extends Forms {
  constructor(protected plataform: Plataform) {
    super(plataform);
  }

  desenhar(): void {
    this.plataform.desenharForma('Quadrado');
  }
}
