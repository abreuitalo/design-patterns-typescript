import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();

deliveryContext(factory, 'Italo', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av Brasil', 'SP');
deliveryContext(factory, 'Joana', '502', 'Av Brasil', 'SP');
deliveryContext(factory, 'Eliana', '502', 'Rua A', 'BH');

console.log();
console.log(factory.getLocations());
