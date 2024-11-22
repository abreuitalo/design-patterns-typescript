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
    return this.firstName + ' ' + this.lastName;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person; //voltar constructor (quase igual uma classe)

// "Herança"
function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'OIE';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.constructor = SubPerson;

const person1 = new Person('Joana', 'Miranda', 21);
console.log(person1.fullName());

const person2 = new SubPerson('Elena', 'Vieira', 20);
console.log(person2);
console.log(person2.fullName());
