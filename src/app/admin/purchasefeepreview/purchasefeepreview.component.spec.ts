import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasefeepreviewComponent } from './purchasefeepreview.component';

describe('PurchasefeepreviewComponent', () => {
  let component: PurchasefeepreviewComponent;
  let fixture: ComponentFixture<PurchasefeepreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasefeepreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasefeepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
