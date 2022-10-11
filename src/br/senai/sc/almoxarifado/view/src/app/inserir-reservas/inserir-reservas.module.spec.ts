import { InserirReservasModule } from './inserir-reservas.module';

describe('InserirReservasModule', () => {
  let inserirReservasModule: InserirReservasModule;

  beforeEach(() => {
    inserirReservasModule = new InserirReservasModule();
  });

  it('should create an instance', () => {
    expect(inserirReservasModule).toBeTruthy();
  });
});
