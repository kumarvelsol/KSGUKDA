import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeTagComponent } from './marquee-tag.component';

describe('MarqueeTagComponent', () => {
  let component: MarqueeTagComponent;
  let fixture: ComponentFixture<MarqueeTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarqueeTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarqueeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
