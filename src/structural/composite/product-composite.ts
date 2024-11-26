// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(
    public name: string,
    public price: number,
  ) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  public children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(productIndex: ProductComponent): void {
    const product = this.children.indexOf(productIndex);
    if (product !== -1) this.children.splice(product, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

// Client
const caneta = new ProductLeaf('Caneta', 1);
const lapiseira = new ProductLeaf('Lapiseira', 2);
const estojo = new ProductLeaf('Estojo', 3);
const productSchool = new ProductComposite();
productSchool.add(caneta, lapiseira, estojo);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);

productSchool.add(anotherProductBox);

console.log(productSchool);
console.log(productSchool.getPrice());
