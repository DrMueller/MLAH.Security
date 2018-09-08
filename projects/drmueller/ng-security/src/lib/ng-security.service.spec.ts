import { TestBed, inject } from '@angular/core/testing';

import { NgSecurityService } from './ng-security.service';

describe('NgSecurityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgSecurityService]
    });
  });

  it('should be created', inject([NgSecurityService], (service: NgSecurityService) => {
    expect(service).toBeTruthy();
  }));
});
