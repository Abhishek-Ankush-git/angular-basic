import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
@Injectable()
export class RouteReusableStrategy extends RouteReuseStrategy {

  private fileName = 'route reusable';
  public constructor( private _log: Logger) {
    super();
  }
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    this._log.debug(this.fileName, route);
    return false;
  }

  public store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle | null): void {
    this._log.debug(this.fileName, route);
    this._log.debug(this.fileName, detachedTree);
  }

  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    this._log.debug(this.fileName, route);
    return false;
  }

  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    this._log.debug(this.fileName, route);
    return null;
  }

  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    this._log.debug(this.fileName, future);
    this._log.debug(this.fileName, curr);
    return future.routeConfig === curr.routeConfig || future.data.reuse;
  }
}
