import { TestBed, inject } from '@angular/core/testing';

import { NgAppNavigationService } from './ng-app-navigation.service';

describe('NgAppNavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgAppNavigationService]
    });
  });

  it('should be created', inject([NgAppNavigationService], (service: NgAppNavigationService) => {
    expect(service).toBeTruthy();
  }));
});
