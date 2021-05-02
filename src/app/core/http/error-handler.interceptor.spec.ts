import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { Logger } from '../logger.service';
import { HttpRequestService } from './http-request.service';

describe('ErrorHandlerInterceptor', () => {
  let errorHandlerInterceptor: ErrorHandlerInterceptor;
  let http: HttpClient;
  let httpMock: HttpTestingController;

  function createInterceptor() {
    errorHandlerInterceptor = new ErrorHandlerInterceptor(TestBed.get(Logger));
    return errorHandlerInterceptor;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: createInterceptor,
          multi: true,
        }, HttpRequestService
      ],
    });

    http = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create instance for the error handler', () => {
    expect(createInterceptor()).toBeTruthy();
  });

  it('should catch error and call error handler', () => {
    spyOn(ErrorHandlerInterceptor.prototype as any, 'errorHandler').and.callThrough();
    http.get('/toto').subscribe(
      () => fail('should error'),
          () => {
            expect((ErrorHandlerInterceptor.prototype as any).errorHandler).toHaveBeenCalled();
          }
    );

    httpMock.expectOne({url: '/toto'}).flush(null, {
      status: 404,
      statusText: 'Not found'
    });

  });
});
