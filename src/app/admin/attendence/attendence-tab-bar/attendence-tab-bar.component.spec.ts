import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceTabBarComponent } from './attendence-tab-bar.component';

describe('AttendenceTabBarComponent', () => {
  let component: AttendenceTabBarComponent;
  let fixture: ComponentFixture<AttendenceTabBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendenceTabBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendenceTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
