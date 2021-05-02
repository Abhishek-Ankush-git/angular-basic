import { Component, isDevMode, OnInit } from '@angular/core';
import { Logger } from './core/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-basics';

  public constructor(private _log: Logger) {
   }
   
  public ngOnInit() {
    if (!isDevMode()) {
      this._log.enableProductionMode();
    }
  }
}
