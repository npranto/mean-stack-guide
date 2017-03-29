import { TestBed, inject } from '@angular/core/testing';

import { UserAuthFormValidationService } from './user-auth-form-validation.service';

describe('UserAuthFormValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthFormValidationService]
    });
  });

  it('should ...', inject([UserAuthFormValidationService], (service: UserAuthFormValidationService) => {
    expect(service).toBeTruthy();
  }));
});
