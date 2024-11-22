const personPrototype = {
  firstName: 'Italo',
  lastName: 'Abreu',
  age: 21,

  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const anotherPerson = Object.create(personPrototype); // delegacao

anotherPerson.firstName = 'Joana'; //shadowing (olhe primeiro no objeto copiado)

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
