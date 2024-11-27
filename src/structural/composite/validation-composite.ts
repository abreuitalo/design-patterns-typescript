// Component
interface ValidationComponent {
  validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail implements ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateNumber implements ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d/.test(value);
  }
}

export class ValidateString implements ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

// Composite
export class ValidationComposite implements ValidationComponent {
  private readonly validations: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const validate of this.validations) {
      if (!validate.validate(value)) return false;
    }

    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.validations.push(validation));
  }
}

// Client
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

const validateComposite = new ValidationComposite();
const validateComposite2 = new ValidationComposite();

validateComposite.add(validateComposite2); // add composite in another composite

validateComposite.add(validateString, validateEmail, validateNumber);
console.log(validateComposite);
