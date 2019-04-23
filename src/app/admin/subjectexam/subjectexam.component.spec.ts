import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectexamComponent } from './subjectexam.component';

describe('SubjectexamComponent', () => {
  let component: SubjectexamComponent;
  let fixture: ComponentFixture<SubjectexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
