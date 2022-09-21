import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueceuASenhaComponent } from './esqueceu-a-senha.component';

describe('EsqueceuASenhaComponent', () => {
  let component: EsqueceuASenhaComponent;
  let fixture: ComponentFixture<EsqueceuASenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsqueceuASenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqueceuASenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
