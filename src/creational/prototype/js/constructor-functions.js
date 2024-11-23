function Person(firstName, lastName, age) {
  //shadowing (olhe primeiro no objeto copiado)
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Italo',
  lastName: 'Abreu',
  age: 21,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person; //voltar constructor (quase igual uma classe)

// "Herança"
function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubPerson = 'FROM SUB PERSON';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.constructor = SubPerson;

const person1 = new Person('Jade', 'Pico', 20);
console.log(person1);

const person2 = new SubPerson('teste1', 'teste2', 22);
console.log(person2);
