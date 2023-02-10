/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageAddOnsService } from './manageAddOns.service';

describe('Service: ManageAddOns', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageAddOnsService]
    });
  });

  it('should ...', inject([ManageAddOnsService], (service: ManageAddOnsService) => {
    expect(service).toBeTruthy();
  }));
});
