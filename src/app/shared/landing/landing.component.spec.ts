import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { LeftpaneComponent } from '../leftpane/leftpane.component';
import { LandingComponent } from './landing.component';
import { CommonService } from '../services/common.service';
import { Logger } from '../../core/logger.service';
import { HttpRequestService } from '../../core/http/http-request.service';
import { MockComponent } from 'ng-mocks';

class MockCommonService {
  getUserDetails() {
    return of(true);
  }
}
class MockLoggerService {
  log () {
    return of(true);
  }
}

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ MockComponent(HeaderComponent), MockComponent(LeftpaneComponent), LandingComponent ],
      providers: [ {provide: CommonService, userClass: MockCommonService},
       {provide: Logger, userClass: MockLoggerService}, HttpRequestService],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call sidebarToggleClass()', () => {
    component.sidebarToggleClass();
    expect(component.sidebarToggleClass).toBeTruthy();
  });
});
