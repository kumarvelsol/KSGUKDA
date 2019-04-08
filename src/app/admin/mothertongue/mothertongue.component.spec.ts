import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MothertongueComponent } from './mothertongue.component';

describe('MothertongueComponent', () => {
  let component: MothertongueComponent;
  let fixture: ComponentFixture<MothertongueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MothertongueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MothertongueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
