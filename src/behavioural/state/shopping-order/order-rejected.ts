import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar o pagamento, pedido recusado.');
  }

  rejectPayment(): void {
    console.log('Não posso recusar o pagamento, pedido já recusado.');
  }

  waitPayment(): void {
    console.log('Não posso mover para pendente, pedido recusado.');
  }

  shipOrder(): void {
    console.log('Não posso enviar um pedido com pagamento recusado.');
  }
}
