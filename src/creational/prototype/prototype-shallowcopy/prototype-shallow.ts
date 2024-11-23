interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

export class Person implements Prototype {
  public readonly address: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }
}

const person1 = new Person('Italo', 21);
const address1 = new Address('Av Brasil', 1);
person1.addAddress(address1);

person1.address[0].street = 'Bla bla'; // muda os objetos clonados tambem

const person2 = person1.clone();

person1.name = 'aaaa';
console.log(person2);
