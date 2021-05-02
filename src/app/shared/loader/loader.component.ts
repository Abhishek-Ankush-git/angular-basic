import { Component, Input } from '@angular/core';
import { LoaderService } from './service/loader.service';
import { Subject } from 'rxjs';

/**
 *
 *
 * @export
 * @class AppLoaderComponent
 */
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class AppLoaderComponent {
  @Input()
  public message: string | undefined;

  public isLoading: Subject<boolean> = this.loaderService.isAppLoading;

  /**
   *Creates an instance of AppLoaderComponent.
   * @param {LoaderService} loaderService
   * @memberof AppLoaderComponent
   */
  public constructor(private loaderService: LoaderService) { }

}
