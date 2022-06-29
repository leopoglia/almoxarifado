import { ComponentesFixosModule } from './componentes-fixos.module';

describe('ComponentesFixosModule', () => {
  let componentesFixosModule: ComponentesFixosModule;

  beforeEach(() => {
    componentesFixosModule = new ComponentesFixosModule();
  });

  it('should create an instance', () => {
    expect(componentesFixosModule).toBeTruthy();
  });
});
