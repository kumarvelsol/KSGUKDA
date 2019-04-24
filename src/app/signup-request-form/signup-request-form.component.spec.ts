import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRequestFormComponent } from './signup-request-form.component';

describe('SignupRequestFormComponent', () => {
  let component: SignupRequestFormComponent;
  let fixture: ComponentFixture<SignupRequestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRequestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
