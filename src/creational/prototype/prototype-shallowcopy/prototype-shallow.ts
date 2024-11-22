export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(
    public street: string,
    public number: number,
  ) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  //Criando o Prototype
  clone(): Person {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Italo', 21);
person1.addAddress(address1);

const person2 = person1.clone();

// possivel problema
// altera valor de address em person 2, por se tratar de referencia
person1.addresses[0].street = 'Bla bla bla';

person2.name = 'Joana';
console.log(person2);

console.log(person2.addresses);
//[ Address { street: 'Bla bla bla', number: 15 } ]
