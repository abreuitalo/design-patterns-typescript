export interface Prototype {
  clone(): Prototype;
}

export class Address implements Prototype {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    // Retorna uma nova instância de Address com valores copiados
    return new Address(this.street, this.number);
  }
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    // Cria uma nova instância de Person com propriedades copiadas
    const newObj = new Person(this.name, this.age);
    // Cria uma nova lista de endereços clonados para o novo objeto,
    // garantindo independência entre os objetos.
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Italo', 21);
person1.addAddress(address1);

const person2 = person1.clone(); // cria uma nova instacia

person1.addresses[0].street = 'Bla bla bla'; // muda apenas no person1

person2.name = 'Joana'; // shadowing

console.log(person2);
console.log(person2.addresses);
