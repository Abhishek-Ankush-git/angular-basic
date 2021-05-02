import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { LoaderInterceptor } from './loader.interceptor';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

describe('LoaderInterceptor', () => {
  let loaderInterceptor: LoaderInterceptor;
  let http: HttpClient;
  let loaderService: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [LoaderInterceptor,
            LoaderService,
            {
                provide: HTTP_INTERCEPTORS,
                useClass: LoaderInterceptor,
                multi: true,
            }
        ],
        imports: [HttpClientTestingModule]
    });
    http = TestBed.get(HttpClient);
    loaderService = TestBed.get(LoaderService);
    loaderInterceptor = TestBed.get(LoaderInterceptor);
    spyOn(loaderService, 'showBlockLoader');
    spyOn(loaderService, 'hideBlockLoader');
  });
  it('When request starts the loader starts and ends as expected', async(() => {
    const url = 'dashboard/usercomponent';
    getLoadervalidator(http, url, loaderService);

  }));

  it('When request starts the loader starts and ends as expected', async(() => {
    const url = 'dashboard/renameWorkflow';
    // Make an HTTP GET request
    getLoadervalidator(http, url, loaderService);

  }));

  it('invoke hideLoader()', async(() => {
    loaderInterceptor.hideLoader();
    expect(loaderService.showBlockLoader).toBeTruthy();
  }));
});
/**
 *
 *
 * @param {HttpClient} http
 * @param {string} url
 * @param {LoaderService} loaderService
 */
function getLoadervalidator(http: HttpClient, url: string, loaderService: LoaderService) {
  http.get(url)
    .pipe(
      finalize(() => expect(loaderService.hideBlockLoader).toHaveBeenCalledTimes(1))
    ).subscribe((res) => {
      expect(loaderService.showBlockLoader).toHaveBeenCalledTimes(1);
    });
}

