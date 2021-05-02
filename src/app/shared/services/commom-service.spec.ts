import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Type } from '@angular/core';
import { CommonService } from './common.service';
import { HttpRequestService } from '../../core/http/http-request.service';

describe('common-service', () => {
    let http: HttpClient;
    let httpMock: HttpTestingController;
    // let responseData: any;
    const mockResponseData = 'abhishek.ankush';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HttpClient, HttpRequestService]
        });
        http = TestBed.get(HttpClient);
        httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should create an instance', () => {
        expect(new CommonService(TestBed.get(HttpRequestService))).toBeTruthy();
    });

});
