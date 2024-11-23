import { Vehicle } from './vehicle';

export class Truck implements Vehicle {
  constructor(public name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} parou`);
  }
}
