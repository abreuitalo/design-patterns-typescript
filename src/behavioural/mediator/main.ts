import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 'Camiseta', price: 49.9 });
seller1.addProduct({ id: '2', name: 'Caneta', price: 9.9 });

seller2.addProduct({ id: '3', name: 'Carro', price: 490000 });
seller2.addProduct({ id: '4', name: 'Lápis', price: 1.9 });

mediator.addSeler(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');

buyer.viewProducts();
