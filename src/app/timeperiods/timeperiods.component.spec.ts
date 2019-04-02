import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeperiodsComponent } from './timeperiods.component';

describe('TimeperiodsComponent', () => {
  let component: TimeperiodsComponent;
  let fixture: ComponentFixture<TimeperiodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeperiodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeperiodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
