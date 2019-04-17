import { TestBed } from '@angular/core/testing';

import { TransfereServiceService } from './transfere-service.service';

describe('TransfereServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransfereServiceService = TestBed.get(TransfereServiceService);
    expect(service).toBeTruthy();
  });
});
