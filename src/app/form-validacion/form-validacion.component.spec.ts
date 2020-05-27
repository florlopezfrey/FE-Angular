import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidacionComponent } from './form-validacion.component';

describe('FormValidacionComponent', () => {
  let component: FormValidacionComponent;
  let fixture: ComponentFixture<FormValidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
