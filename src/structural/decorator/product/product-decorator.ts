import { ProductProtocol } from './product-protocol';

// decorator
export class ProductDecorator implements ProductProtocol {
  constructor(public product: ProductProtocol) {}

  getName(): string {
    return this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice();
  }
}
