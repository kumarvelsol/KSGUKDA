import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableupdateComponent } from './timetableupdate.component';

describe('TimetableupdateComponent', () => {
  let component: TimetableupdateComponent;
  let fixture: ComponentFixture<TimetableupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetableupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
