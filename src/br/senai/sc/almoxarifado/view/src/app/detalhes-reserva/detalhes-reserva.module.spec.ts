import { DetalhesReservaModule } from './detalhes-reserva.module';

describe('DetalhesReservaModule', () => {
  let detalhesReservaModule: DetalhesReservaModule;

  beforeEach(() => {
    detalhesReservaModule = new DetalhesReservaModule();
  });

  it('should create an instance', () => {
    expect(detalhesReservaModule).toBeTruthy();
  });
});
