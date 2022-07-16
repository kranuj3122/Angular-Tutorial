import { TestBed } from '@angular/core/testing';

import { ApisDataService } from './apis-data.service';

describe('ApisDataService', () => {
  let service: ApisDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
