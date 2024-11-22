import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassicA = MyDatabaseClassic.getInstance();

myDatabaseClassicA.add({ name: 'Italo', age: 21 });
myDatabaseClassicA.add({ name: 'Maria', age: 22 });
myDatabaseClassicA.add({ name: 'Eduarda', age: 23 });
//
