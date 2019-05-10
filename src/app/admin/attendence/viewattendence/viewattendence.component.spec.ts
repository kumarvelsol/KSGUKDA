import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewattendenceComponent } from './viewattendence.component';

describe('ViewattendenceComponent', () => {
  let component: ViewattendenceComponent;
  let fixture: ComponentFixture<ViewattendenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewattendenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewattendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
