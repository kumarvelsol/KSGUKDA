import { TestBed } from '@angular/core/testing';

import { SignupServceService } from './signup-servce.service';

describe('SignupServceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupServceService = TestBed.get(SignupServceService);
    expect(service).toBeTruthy();
  });
});
