import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

mainDishBuilder.makeMeal();
veganDishBuilder.makeMeal();
