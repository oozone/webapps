import { TestBed, inject } from '@angular/core/testing';

import { RatingDataService } from './rating-data.service';

describe('RatingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingDataService]
    });
  });

  it('should be created', inject([RatingDataService], (service: RatingDataService) => {
    expect(service).toBeTruthy();
  }));
});
