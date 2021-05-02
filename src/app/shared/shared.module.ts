import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { LeftpaneComponent } from './leftpane/leftpane.component';
import { AppLoaderComponent } from './loader/loader.component';
import { LandingComponent } from './landing/landing.component';


import { CommonService } from './services/common.service';

import { LoaderService } from './loader/service/loader.service';
import { LoaderInterceptor } from './loader/service/loader.interceptor';

@NgModule({
  imports: [
    AngularCommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    AppLoaderComponent,
    HeaderComponent,
    LeftpaneComponent,
    LandingComponent
  ],
  providers: [
    CommonService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  exports: [
    AppLoaderComponent,
    HeaderComponent,
    LeftpaneComponent,
    LandingComponent
  ],
})
export class SharedModule {}
