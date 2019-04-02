import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesRelatedComponent } from './classes-related.component';

describe('ClassesRelatedComponent', () => {
  let component: ClassesRelatedComponent;
  let fixture: ComponentFixture<ClassesRelatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesRelatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
