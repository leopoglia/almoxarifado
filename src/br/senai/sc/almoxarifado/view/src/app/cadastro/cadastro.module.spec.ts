import { CadastroModule } from './cadastro.module';

describe('CadastroModule', () => {
  let cadastroModule: CadastroModule;

  beforeEach(() => {
    cadastroModule = new CadastroModule();
  });

  it('should create an instance', () => {
    expect(cadastroModule).toBeTruthy();
  });
});
