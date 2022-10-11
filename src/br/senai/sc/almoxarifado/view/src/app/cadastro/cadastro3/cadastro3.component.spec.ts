import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cadastro3Component } from './cadastro3.component';

describe('Cadastro3Component', () => {
  let component: Cadastro3Component;
  let fixture: ComponentFixture<Cadastro3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
