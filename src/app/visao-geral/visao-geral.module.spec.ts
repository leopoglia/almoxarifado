import { VisaoGeralModule } from './visao-geral.module';

describe('VisaoGeralModule', () => {
  let visaoGeralModule: VisaoGeralModule;

  beforeEach(() => {
    visaoGeralModule = new VisaoGeralModule();
  });

  it('should create an instance', () => {
    expect(visaoGeralModule).toBeTruthy();
  });
});
