import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { PersonnelGuard } from './personnel.guard';

describe('personnelGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => personnelGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
