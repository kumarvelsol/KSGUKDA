import { TestBed } from '@angular/core/testing';

import { HolidaysServsService } from './holidays-servs.service';

describe('HolidaysServsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HolidaysServsService = TestBed.get(HolidaysServsService);
    expect(service).toBeTruthy();
  });
});
