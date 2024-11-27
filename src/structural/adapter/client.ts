import { ValidateEmailClassAdapter } from './validation/valida-email-class-adapter';
import { validateEmailFnAdapter } from './validation/valida-email-fn-adapter';
import {
  ValidationEmailFnProtocol,
  ValidationEmailProtocol,
} from './validation/valida-email-protocol';

function validaEmailClass(
  validaEmailClass: ValidationEmailProtocol,
  email: string,
) {
  if (validaEmailClass.validateEmail(email)) {
    console.log('É válido');
  } else {
    console.log('É inválido');
  }
}

function validaEmailFn(
  validaEmailClass: ValidationEmailFnProtocol,
  email: string,
) {
  if (validaEmailClass(email)) {
    console.log('É válido');
  } else {
    console.log('É inválido');
  }
}

const email = 'italo@gmail.com';

validaEmailClass(new ValidateEmailClassAdapter(), email);
validaEmailFn(validateEmailFnAdapter, email);
