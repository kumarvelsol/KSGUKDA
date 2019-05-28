import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseFeeComponent } from './purchase-fee.component';

describe('PurchaseFeeComponent', () => {
  let component: PurchaseFeeComponent;
  let fixture: ComponentFixture<PurchaseFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
