import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceitarUsuariosComponent } from './aceitar-usuarios.component';

describe('AceitarUsuariosComponent', () => {
  let component: AceitarUsuariosComponent;
  let fixture: ComponentFixture<AceitarUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitarUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceitarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
