import { TestBed } from '@angular/core/testing';

import { ClasserviceService } from './classervice.service';

describe('ClasserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClasserviceService = TestBed.get(ClasserviceService);
    expect(service).toBeTruthy();
  });
});
