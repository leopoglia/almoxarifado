import { EditarUsuarioModule } from './editar-usuario.module';

describe('EditarUsuarioModule', () => {
  let editarUsuarioModule: EditarUsuarioModule;

  beforeEach(() => {
    editarUsuarioModule = new EditarUsuarioModule();
  });

  it('should create an instance', () => {
    expect(editarUsuarioModule).toBeTruthy();
  });
});
