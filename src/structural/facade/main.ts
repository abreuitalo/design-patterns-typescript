import { AbstractFactoryFacade } from './abstract-factory-facade';
import { BuilderFacade } from './builder-facade';

const builderFacade = new BuilderFacade();
const abstractFactoryFacade = new AbstractFactoryFacade();

builderFacade.makeMeal1();
builderFacade.makeMeal2();

console.log('-------------------------------------');

abstractFactoryFacade.car1.pickUp();
abstractFactoryFacade.car2.pickUp();
