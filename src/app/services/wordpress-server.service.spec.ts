import { TestBed } from '@angular/core/testing';

import { WordpressServerService } from './wordpress-server.service';

describe('WordpressServerService', () => {
  let service: WordpressServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordpressServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
