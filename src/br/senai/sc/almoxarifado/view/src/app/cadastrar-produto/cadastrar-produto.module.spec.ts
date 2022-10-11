import { CadastrarProdutoModule } from './cadastrar-produto.module';

describe('CadastrarProdutoModule', () => {
  let cadastrarProdutoModule: CadastrarProdutoModule;

  beforeEach(() => {
    cadastrarProdutoModule = new CadastrarProdutoModule();
  });

  it('should create an instance', () => {
    expect(cadastrarProdutoModule).toBeTruthy();
  });
});
