import { Plataform } from '../implementation/plataform-interface';

export abstract class Forms {
  constructor(protected plataform: Plataform) {}

  abstract desenhar(): void;
}
