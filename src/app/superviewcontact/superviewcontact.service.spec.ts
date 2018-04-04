import { TestBed, inject } from '@angular/core/testing';

import { SuperviewcontactService } from './superviewcontact.service';

describe('SuperviewcontactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperviewcontactService]
    });
  });

  it('should be created', inject([SuperviewcontactService], (service: SuperviewcontactService) => {
    expect(service).toBeTruthy();
  }));
});
