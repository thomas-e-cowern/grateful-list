import { TestBed, inject } from '@angular/core/testing';

import { GratefulListService } from './grateful-list.service';

describe('GratefulListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GratefulListService]
    });
  });

  it('should be created', inject([GratefulListService], (service: GratefulListService) => {
    expect(service).toBeTruthy();
  }));
});
