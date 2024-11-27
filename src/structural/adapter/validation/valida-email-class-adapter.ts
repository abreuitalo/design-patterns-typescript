import isEmail from 'validator/lib/isEmail';
import { ValidationEmailProtocol } from './valida-email-protocol';

export class ValidateEmailClassAdapter implements ValidationEmailProtocol {
  validateEmail(value: string): boolean {
    return isEmail(value);
  }
}
