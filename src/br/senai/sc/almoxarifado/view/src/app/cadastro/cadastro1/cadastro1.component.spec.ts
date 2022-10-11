import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro1Component } from './cadastro1.component';

describe('Cadastro1Component', () => {
  let component: Cadastro1Component;
  let fixture: ComponentFixture<Cadastro1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
