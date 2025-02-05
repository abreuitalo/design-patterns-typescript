import { ProductDecorator } from './product-decorator';

// concrete decorator
export class ProductCustomizationDecorator extends ProductDecorator {
  getName(): string {
    return this.product.getName() + ' (Customizada)';
  }

  getPrice(): number {
    return this.product.getPrice() + 50;
  }
}
