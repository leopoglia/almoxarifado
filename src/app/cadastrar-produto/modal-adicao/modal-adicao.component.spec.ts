import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicaoComponent } from './modal-adicao.component';

describe('CadastrarProdutoComponent', () => {
  let component: ModalAdicaoComponent;
  let fixture: ComponentFixture<ModalAdicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAdicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAdicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
