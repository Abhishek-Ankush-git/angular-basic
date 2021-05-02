import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Logger, LogLevel } from './logger.service';

describe('Logger-Service', () => {
  let mockLogger: Logger;
  const mocksource = 'UnitTest';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  beforeEach(() => {
    mockLogger = new Logger();
  });
  afterEach(() => {
  });

  it('should create an instance', () => {
    expect(new Logger()).toBeTruthy();
  });

  it('should enable production Logs', () => {
    mockLogger.enableProductionMode();
    expect(Logger.level).toEqual(LogLevel.Error);

  });

  it('should validate all logging level', () => {
    const outputSpy = jasmine.createSpy('outputSpy');
    Logger.outputs.push(outputSpy);

    mockLogger.debug(mocksource, 'debug Log');
    mockLogger.info(mocksource, 'Info Log');
    mockLogger.warn(mocksource, 'warning Log');
    mockLogger.error(mocksource, 'error Log');
  });

});
