import { Injectable } from '@angular/core';
import { HttpRequestService } from '../../core/http/http-request.service';
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {

    public constructor(private _http: HttpRequestService) { }

    public invokeEvent: Subject<any> = new Subject();

}
