import { TestBed } from '@angular/core/testing';

import { TryApiService } from './try-api.service';

describe('TryApiService', () => {
  let service: TryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
