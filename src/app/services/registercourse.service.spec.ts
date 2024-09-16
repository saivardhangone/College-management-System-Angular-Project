import { TestBed } from '@angular/core/testing';

import { RegistercourseService } from './registercourse.service';

describe('RegistercourseService', () => {
  let service: RegistercourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistercourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
