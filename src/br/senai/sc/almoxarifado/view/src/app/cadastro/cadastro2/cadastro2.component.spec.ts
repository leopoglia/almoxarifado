import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro2Component } from './cadastro2.component';

describe('Cadastro2Component', () => {
  let component: Cadastro2Component;
  let fixture: ComponentFixture<Cadastro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
