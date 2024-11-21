import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const myDatabaseClassicB = MyDatabaseClassic.getInstance();

myDatabaseClassicB.add({ name: 'Katrini', age: 21 });
myDatabaseClassicB.add({ name: 'Beatriz', age: 22 });
myDatabaseClassicB.add({ name: 'Gabrielly', age: 23 });

myDatabaseClassicB.show();
