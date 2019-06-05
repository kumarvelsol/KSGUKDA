import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeepaymentpreviewComponent } from './feepaymentpreview.component';

describe('FeepaymentpreviewComponent', () => {
  let component: FeepaymentpreviewComponent;
  let fixture: ComponentFixture<FeepaymentpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeepaymentpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeepaymentpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
