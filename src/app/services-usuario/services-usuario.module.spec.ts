import { ServicesUsuarioModule } from './services-usuario.module';

describe('ServicesUsuarioModule', () => {
  let servicesUsuarioModule: ServicesUsuarioModule;

  beforeEach(() => {
    servicesUsuarioModule = new ServicesUsuarioModule();
  });

  it('should create an instance', () => {
    expect(servicesUsuarioModule).toBeTruthy();
  });
});
