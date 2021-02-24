import { TestBed } from '@angular/core/testing';

import { JwtInterceptor } from './jwt.interceptor';

describe('JwtInterceptor', () => {
  let jwtEnt: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    jwtEnt = TestBed.inject(JwtInterceptor);
  });

  it('should be created', () => {
    expect(jwtEnt).toBeTruthy();
  });
});