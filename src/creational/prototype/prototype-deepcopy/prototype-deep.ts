interface Prototype {
  clone(): Prototype;
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

export class Person implements Prototype {
  public address: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.address = this.address.map((address) => address.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.address.push(address);
  }
}

const person1 = new Person('Italo', 21);
const address1 = new Address('Av Brasil', 1);
person1.addAddress(address1);
const person2 = person1.clone();

person1.address[0].street = 'Bla bla';

console.log(person1.address);
console.log(person2.address);
