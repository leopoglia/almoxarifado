import { CadastrarUsuarioModule } from './cadastrar-usuario.module';

describe('CadastrarUsuarioModule', () => {
  let cadastrarUsuarioModule: CadastrarUsuarioModule;

  beforeEach(() => {
    cadastrarUsuarioModule = new CadastrarUsuarioModule();
  });

  it('should create an instance', () => {
    expect(cadastrarUsuarioModule).toBeTruthy();
  });
});
