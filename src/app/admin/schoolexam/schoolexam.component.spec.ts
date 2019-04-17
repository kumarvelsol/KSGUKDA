import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolexamComponent } from './schoolexam.component';

describe('SchoolexamComponent', () => {
  let component: SchoolexamComponent;
  let fixture: ComponentFixture<SchoolexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
