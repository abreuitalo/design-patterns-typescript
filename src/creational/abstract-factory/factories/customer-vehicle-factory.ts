import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { CustomerProtocol } from '../customer/customer-protocol';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): CustomerProtocol;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
