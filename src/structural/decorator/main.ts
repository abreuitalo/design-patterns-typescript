import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtStamp = new ProductStampDecorator(tShirt);
const tShirtCustomization = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getName(), tShirt.getPrice());
console.log(tShirtStamp.getName(), tShirtStamp.getPrice());
console.log(tShirtCustomization.getName(), tShirtCustomization.getPrice());
