import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeandPeriodComponent } from './timeand-period.component';

describe('TimeandPeriodComponent', () => {
  let component: TimeandPeriodComponent;
  let fixture: ComponentFixture<TimeandPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeandPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeandPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
