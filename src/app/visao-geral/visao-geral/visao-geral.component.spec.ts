import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaoGeralComponent } from './visao-geral.component';

describe('VisaoGeralComponent', () => {
  let component: VisaoGeralComponent;
  let fixture: ComponentFixture<VisaoGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaoGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
