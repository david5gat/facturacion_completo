import { TestBed } from '@angular/core/testing';

import { CompartirObjService } from './compartir-obj.service';

describe('CompartirObjService', () => {
  let service: CompartirObjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartirObjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
