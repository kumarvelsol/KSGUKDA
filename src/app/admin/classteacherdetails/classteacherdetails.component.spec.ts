import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassteacherdetailsComponent } from './classteacherdetails.component';

describe('ClassteacherdetailsComponent', () => {
  let component: ClassteacherdetailsComponent;
  let fixture: ComponentFixture<ClassteacherdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassteacherdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassteacherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
