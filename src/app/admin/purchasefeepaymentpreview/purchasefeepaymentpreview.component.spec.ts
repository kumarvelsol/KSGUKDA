import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasefeepaymentpreviewComponent } from './purchasefeepaymentpreview.component';

describe('PurchasefeepaymentpreviewComponent', () => {
  let component: PurchasefeepaymentpreviewComponent;
  let fixture: ComponentFixture<PurchasefeepaymentpreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasefeepaymentpreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasefeepaymentpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
