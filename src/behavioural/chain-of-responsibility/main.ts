import { CEOBudgetHandler } from './ceo-budget-handler';
import { DirectorBudgetHandler } from './director-budget-handler';
import { CustomerBudget } from './customer-budget';
import { ManagerBudgetHandler } from './manager-budget-handler';
import { SellerBudgetHandler } from './seller-budget-handler';

const customerBudget = new CustomerBudget(50001);

const seller = new SellerBudgetHandler();

// ordem importa
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);
console.log(customerBudget);
