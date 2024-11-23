import { CarFactory } from './factories/car-factory';
import { BicycleFactory } from './factories/bicycle-factory';
import { TruckFactory } from './factories/truck-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();
const truckFactory = new TruckFactory();

// const fusca = carFactory.getVehicle('Fusca');
// const bicycle = bicycleFactory.getVehicle('Bicicleta');
// const truck = truckFactory.getVehicle('Caminhão');

// console.log(fusca);
// console.log(bicycle);
// console.log(truck);

const customerNames = ['Ana', 'Joana', 'Helena', 'Luisa'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
