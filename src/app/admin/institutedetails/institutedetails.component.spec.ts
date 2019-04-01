import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutedetailsComponent } from './institutedetails.component';

describe('InstitutedetailsComponent', () => {
  let component: InstitutedetailsComponent;
  let fixture: ComponentFixture<InstitutedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
