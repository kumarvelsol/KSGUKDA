import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentexamresultComponent } from './studentexamresult.component';

describe('StudentexamresultComponent', () => {
  let component: StudentexamresultComponent;
  let fixture: ComponentFixture<StudentexamresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentexamresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentexamresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
