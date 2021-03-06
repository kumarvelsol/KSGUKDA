import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAllocationComponent } from './subject-allocation.component';

describe('SubjectAllocationComponent', () => {
  let component: SubjectAllocationComponent;
  let fixture: ComponentFixture<SubjectAllocationComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectAllocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
