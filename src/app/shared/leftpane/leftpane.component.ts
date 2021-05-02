import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-leftpane',
  templateUrl: './leftpane.component.html',
  styleUrls: ['./leftpane.component.css']
})
export class LeftpaneComponent {

  public isSidebarActive: boolean;

  @Output()
  public changeToggleEvent = new EventEmitter<string>();

  /**
   * @function callToggle
   * @description emit left pane expand/collapse
   */
  public callToggle() {
    this.isSidebarActive = !this.isSidebarActive;
    this.changeToggleEvent.emit();
  }

}
