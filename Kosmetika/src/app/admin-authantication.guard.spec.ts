import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminAuthanticationGuard } from './admin-authantication.guard';

describe('adminAuthanticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminAuthanticationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
