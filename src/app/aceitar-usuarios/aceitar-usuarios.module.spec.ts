import { AceitarUsuariosModule } from './aceitar-usuarios.module';

describe('AceitarUsuariosModule', () => {
  let aceitarUsuariosModule: AceitarUsuariosModule;

  beforeEach(() => {
    aceitarUsuariosModule = new AceitarUsuariosModule();
  });

  it('should create an instance', () => {
    expect(aceitarUsuariosModule).toBeTruthy();
  });
});
