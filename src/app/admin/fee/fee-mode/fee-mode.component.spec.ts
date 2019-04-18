import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeModeComponent } from './fee-mode.component';

describe('FeeModeComponent', () => {
  let component: FeeModeComponent;
  let fixture: ComponentFixture<FeeModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
