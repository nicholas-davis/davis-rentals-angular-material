import { TestBed, inject } from '@angular/core/testing';

import { PropertyDetailsService } from './property-details.service';

describe('DetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyDetailsService]
    });
  });

  it('should be created', inject([PropertyDetailsService], (service: PropertyDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
