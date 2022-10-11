import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirReservasComponent } from './inserir-reservas.component';

describe('InserirReservasComponent', () => {
  let component: InserirReservasComponent;
  let fixture: ComponentFixture<InserirReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
