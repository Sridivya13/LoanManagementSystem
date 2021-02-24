import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  let errEnt: ErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    errEnt = TestBed.inject(ErrorInterceptor);
  });

  it('should be created', () => {
    expect(errEnt).toBeTruthy();
  });
});