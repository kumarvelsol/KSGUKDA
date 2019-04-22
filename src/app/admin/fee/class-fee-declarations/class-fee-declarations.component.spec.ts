import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFeeDeclarationsComponent } from './class-fee-declarations.component';

describe('ClassFeeDeclarationsComponent', () => {
  let component: ClassFeeDeclarationsComponent;
  let fixture: ComponentFixture<ClassFeeDeclarationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassFeeDeclarationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassFeeDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
