import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularfeeComponent } from './regularfee.component';

describe('RegularfeeComponent', () => {
  let component: RegularfeeComponent;
  let fixture: ComponentFixture<RegularfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
