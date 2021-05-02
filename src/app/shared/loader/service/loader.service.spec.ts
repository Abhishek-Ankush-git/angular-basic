import { TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ LoaderService ]
  }));

  it('should be created', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    expect(service).toBeTruthy();
  });
  it('emit - block loader hide', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    service.hideBlockLoader();
    expect(service.hideBlockLoader).toBeTruthy();
  });
  it('emit - block loader show', () => {
    const service: LoaderService = TestBed.get(LoaderService);
    service.showBlockLoader();
    expect(service.showBlockLoader).toBeTruthy();
  });
});
