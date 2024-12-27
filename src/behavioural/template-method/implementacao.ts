export abstract class TemplateMethod {
  // impedir redeclaracao nas subclasses
  readonly templateMethod = (): void => {
    this.stepA();
    this.hook();
    this.stepB();
  };

  abstract stepA(): void;
  abstract stepB(): void;
  hook(): void {}
}

class ConcreteTemplateMethod extends TemplateMethod {
  stepA(): void {
    console.log('Step A');
  }

  stepB(): void {
    console.log('Step B');
  }

  hook(): void {
    console.log('Eu sou HOOK');
  }
}

const concret = new ConcreteTemplateMethod();
concret.templateMethod();
