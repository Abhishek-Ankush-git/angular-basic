/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */

/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
export enum LogLevel {
  Off = 0,
  Custom,
  Error,
  Warning,
  Info,
  Debug,
}

/**
 * Log output handler function.
 */
export type LogOutput = (source: string | undefined, level: LogLevel, ...objects: any[]) => void;

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Logger {
  constructor() { }
  /**
   * Current logging level.
   * Set it to LogLevel.Off to disable logs completely.
   */
  static level = LogLevel.Debug;

  /**
   * Additional log outputs.
   */
  static outputs: LogOutput[] = [];

  /**
   * Enables production mode.
   * Sets logging level to LogLevel.Warning.
   */
  public enableProductionMode() {
    Logger.level = LogLevel.Error;
  }

  /**
   * Logs messages or objects  with the debug level.
   * Works the same as console.log().
   */
  public debug(source: string, ...objects: any[]) {
    this.log(source, console.log, LogLevel.Debug, objects);
  }

  /**
   * Logs messages or objects  with the info level.
   * Works the same as console.log().
   */
  public info(source: string, ...objects: any[]) {
    // tslint:disable-next-line:no-console
    this.log(source, console.info, LogLevel.Info, objects);
  }

  /**
   * Logs messages or objects  with the warning level.
   * Works the same as console.log().
   */
  public warn(source: string, ...objects: any[]) {
    this.log(source, console.warn, LogLevel.Warning, objects);
  }

  /**
   * Logs messages or objects  with the error level.
   * Works the same as console.log().
   */
  public error(source: string, ...objects: any[]) {
    this.log(source, console.error, LogLevel.Error, objects);
  }

  /**
   * @function log
   * @param source
   * @param func
   * @param level
   * @param objects
   * @description log messages and events
   */
  private log(source: string, func: (...args: any[]) => void, level: LogLevel, objects: any[]) {
    const log = ['[' + source + ']'].concat(objects);
    if (level <= Logger.level) {
      func.apply(console, log);
      Logger.outputs.forEach((output) => output.apply(output, [source, level, objects]));
    }
  }
}
