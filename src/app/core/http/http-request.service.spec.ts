import { HttpRequestService } from './http-request.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/core';

describe('http-request-service', () => {
    let mockHttpRequestService: HttpRequestService;
    let http: HttpClient;
    let httpMock: HttpTestingController;
    let responseData: any;
    const mockResponseData = 'unittesting';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpClient]
        });
        http = TestBed.get(HttpClient);
        httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
    });
    beforeEach(() => {
        mockHttpRequestService = new HttpRequestService(http);
    });
    afterEach(() => {
        httpMock.verify();
    });

    it('should create an instance', () => {
        expect(new HttpRequestService(TestBed.get(HttpClient))).toBeTruthy();
    });

    it('should call and verify the get menthod', () => {
        mockHttpRequestService.get('/toto').toPromise().then((response) => { responseData = response; });

        // Assert
        const req = httpMock.expectOne({ url: '/toto' });
        req.flush(mockResponseData);
    });

    it('should call and verify the post method', () => {
        mockHttpRequestService.post('/postrequest', {}).toPromise().then((response) => response);

        // Assert
        let req = httpMock.expectOne({ url: '/postrequest' });
        req.flush(mockResponseData);
        expect(req.request.url).toBe('/postrequest');
        expect(req.request.body).toEqual({});

        mockHttpRequestService.post('/postrequest', {}, { responseType: 'text' }).toPromise().then((response) => { responseData = response; });

        // Assert
        req = httpMock.expectOne({ url: '/postrequest' });
        req.flush(mockResponseData);
        expect(req.request.url).toBe('/postrequest');
        expect(req.request.body).toEqual({});
    });
    it('should call and verify the put method', () => {
        mockHttpRequestService.put('/putrequest', {}).toPromise().then((response) => response);

        // Assert
        let req = httpMock.expectOne({ url: '/putrequest' });
        req.flush(mockResponseData);
        expect(req.request.url).toBe('/putrequest');
        expect(req.request.body).toEqual({});

        mockHttpRequestService.put('/putrequest', {}, { responseType: 'text' }).toPromise().then((response) => { responseData = response; });

        // Assert
        req = httpMock.expectOne({ url: '/putrequest' });
        req.flush(mockResponseData);
        expect(req.request.url).toBe('/putrequest');
        expect(req.request.body).toEqual({});
    });
    it('should call and verify the delete method', () => {

        mockHttpRequestService.delete('/deleterequest', {}).toPromise().then((response) => { responseData = response; });

        // Assert
        const req = httpMock.expectOne({ url: '/deleterequest' });
        req.flush(mockResponseData);
        expect(req.request.url).toBe('/deleterequest');
    });

});
