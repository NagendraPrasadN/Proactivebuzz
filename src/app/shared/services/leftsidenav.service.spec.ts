import { TestBed } from '@angular/core/testing';

import { LeftsidenavService } from './leftsidenav.service';

describe('LeftsidenavService', () => {
  let service: LeftsidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftsidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
