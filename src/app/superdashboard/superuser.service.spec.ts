import { TestBed, inject } from '@angular/core/testing';

import { SuperuserService } from './superuser.service';

describe('SuperuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperuserService]
    });
  });

  it('should be created', inject([SuperuserService], (service: SuperuserService) => {
    expect(service).toBeTruthy();
  }));
});
