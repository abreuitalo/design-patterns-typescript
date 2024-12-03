import { EnterpriseCreateVehicleCustomerFactory } from '../../creational/abstract-factory/factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from '../../creational/abstract-factory/factories/individual-customer-vehicle-factory';

export class AbstractFactoryFacade {
  private enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
  private individualFactory = new IndividualCreateVehicleCustomerFactory();

  car1 = this.enterpriseFactory.createVehicle('Fusca', 'João');
  car2 = this.individualFactory.createVehicle('Celta', 'Helena');
}
