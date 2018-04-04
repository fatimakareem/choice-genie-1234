import { TestBed, inject } from '@angular/core/testing';

import { SviewapartnerService } from './sviewapartner.service';

describe('SviewapartnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SviewapartnerService]
    });
  });

  it('should be created', inject([SviewapartnerService], (service: SviewapartnerService) => {
    expect(service).toBeTruthy();
  }));
});
