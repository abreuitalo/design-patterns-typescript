export interface ValidationEmailProtocol {
  validateEmail: ValidationEmailFnProtocol;
}

export interface ValidationEmailFnProtocol {
  (value: string): boolean;
}
