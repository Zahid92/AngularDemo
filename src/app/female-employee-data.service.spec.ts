import { TestBed } from '@angular/core/testing';

import { FemaleEmployeeDataService } from './female-employee-data.service';

describe('FemaleEmployeeDataService', () => {
  let service: FemaleEmployeeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FemaleEmployeeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
