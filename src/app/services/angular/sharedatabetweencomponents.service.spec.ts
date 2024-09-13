import { TestBed } from '@angular/core/testing';

import { SharedatabetweencomponentsService } from './sharedatabetweencomponents.service';

describe('SharedatabetweencomponentsService', () => {
  let service: SharedatabetweencomponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedatabetweencomponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
