const personPrototype = {
  firstName: 'Italo',
  lastName: 'Abreu',
  age: 21,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const person1 = Object.create(personPrototype); // Prototype
person1.firstName = 'José'; // Shadowing

console.log(person1);
console.log(person1.fullName());
console.log(Object.getPrototypeOf(person1));
