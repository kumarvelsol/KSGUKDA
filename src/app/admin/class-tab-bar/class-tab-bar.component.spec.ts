import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTabBarComponent } from './class-tab-bar.component';

describe('ClassTabBarComponent', () => {
  let component: ClassTabBarComponent;
  let fixture: ComponentFixture<ClassTabBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTabBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
