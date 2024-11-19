import { MyDatabaseFunction } from './db/my-database-function';
import './module_a';

const myDatabaseClassicB = MyDatabaseFunction;

myDatabaseClassicB.add({ name: 'Katrini', age: 21 });
myDatabaseClassicB.add({ name: 'Beatriz', age: 22 });
myDatabaseClassicB.add({ name: 'Gabrielly', age: 23 });

myDatabaseClassicB.show();
