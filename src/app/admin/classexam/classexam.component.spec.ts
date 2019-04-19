import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassexamComponent } from './classexam.component';

describe('ClassexamComponent', () => {
  let component: ClassexamComponent;
  let fixture: ComponentFixture<ClassexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
