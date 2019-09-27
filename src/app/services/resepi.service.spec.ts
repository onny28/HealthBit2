import { TestBed } from '@angular/core/testing';

import { ResepiService } from './resepi.service';

describe('ResepiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResepiService = TestBed.get(ResepiService);
    expect(service).toBeTruthy();
  });
});
