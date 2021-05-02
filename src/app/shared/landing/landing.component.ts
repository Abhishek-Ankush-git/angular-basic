import { Component, OnInit } from '@angular/core';

/**
 *
 *
 * @export
 * @class LandingComponent
 */
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  public isSidebarActive = false;
  public isContainerActive = false;

  /**
   * @function sidebarToggleClass
   * @description Sidebar ToggleClass function
   * */
  public sidebarToggleClass() {
      this.isSidebarActive = !this.isSidebarActive;
      this.isContainerActive = !this.isContainerActive;
  }
}
