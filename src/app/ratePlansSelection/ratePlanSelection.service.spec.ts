/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RatePlanSelectionService } from './ratePlanSelection.service';

describe('Service: RatePlanSelection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatePlanSelectionService]
    });
  });

  it('should ...', inject([RatePlanSelectionService], (service: RatePlanSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
