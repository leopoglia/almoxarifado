import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoReservaComponent } from './produto-reserva.component';

describe('ProdutoReservaComponent', () => {
  let component: ProdutoReservaComponent;
  let fixture: ComponentFixture<ProdutoReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
