/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddonSelectionService } from './addonSelection.service';

describe('Service: AddonSelection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddonSelectionService]
    });
  });

  it('should ...', inject([AddonSelectionService], (service: AddonSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
