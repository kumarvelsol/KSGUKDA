import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTabBarComponent } from './subject-tab-bar.component';

describe('SubjectTabBarComponent', () => {
  let component: SubjectTabBarComponent;
  let fixture: ComponentFixture<SubjectTabBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTabBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
