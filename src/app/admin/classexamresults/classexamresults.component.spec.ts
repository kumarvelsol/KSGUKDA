import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassexamresultsComponent } from './classexamresults.component';

describe('ClassexamresultsComponent', () => {
  let component: ClassexamresultsComponent;
  let fixture: ComponentFixture<ClassexamresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassexamresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassexamresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
