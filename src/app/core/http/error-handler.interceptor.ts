import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retryWhen, take, concat, mergeMap } from 'rxjs/operators';

import { Logger } from '../logger.service';

// const log = new Logger('ErrorHandlerInterceptor');

export class HttpResponseWithMessage extends HttpResponse<any> {
  public message?: string;
}
/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {

  public constructor(private _log: Logger) { }
  
  /**
   * Intercept API error response
   * @param  {HttpRequest<any>} request
   * @param  {HttpHandler} next
   * @returns Observable
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retryWhen(error => {
        return error.pipe(
          mergeMap((errorData: any) => {
            // retry only if error status is 500
            return errorData.status === 500 ? of(errorData) : throwError(errorData);
          }),
          take(2),
          concat(throwError(error)));
      }),
      catchError((error) => this.errorHandler(error)));
  }

  /**
   * Customize the default error handler here if needed
   * @param response 
   * @returns handler 
   */
  private errorHandler(response: HttpResponseWithMessage): Observable<HttpResponseWithMessage> {
    const errormessage = `url: ${response.url} status: ${response.status} statusText: ${response.statusText} body: ${response.body}`;
    this._log.error('API error', errormessage);
    throw response;
  }
}
