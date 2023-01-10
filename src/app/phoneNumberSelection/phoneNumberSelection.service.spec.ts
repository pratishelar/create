/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhoneNumberSelectionService } from './phoneNumberSelection.service';

describe('Service: PhoneNumberSelection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneNumberSelectionService]
    });
  });

  it('should ...', inject([PhoneNumberSelectionService], (service: PhoneNumberSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
