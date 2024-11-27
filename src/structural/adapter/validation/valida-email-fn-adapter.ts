import isEmail from 'validator/lib/isEmail';
import { ValidationEmailFnProtocol } from './valida-email-protocol';

export const validateEmailFnAdapter: ValidationEmailFnProtocol = (
  value: string,
): boolean => {
  return isEmail(value);
};
