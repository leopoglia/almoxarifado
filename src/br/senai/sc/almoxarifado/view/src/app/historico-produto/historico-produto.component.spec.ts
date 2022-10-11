import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoProdutoComponent } from './historico-produto.component';

describe('HistoricoProdutoComponent', () => {
  let component: HistoricoProdutoComponent;
  let fixture: ComponentFixture<HistoricoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
