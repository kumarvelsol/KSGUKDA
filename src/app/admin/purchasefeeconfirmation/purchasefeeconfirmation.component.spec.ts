import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasefeeconfirmationComponent } from './purchasefeeconfirmation.component';

describe('PurchasefeeconfirmationComponent', () => {
  let component: PurchasefeeconfirmationComponent;
  let fixture: ComponentFixture<PurchasefeeconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasefeeconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasefeeconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
