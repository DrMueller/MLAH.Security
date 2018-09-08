import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdalService } from 'adal-angular4';

import * as components from './components';
import * as services from './services';

import {
  MatMenuModule,
  MatButtonModule,
  MatDialogModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [
    components.UserClaimsComponent
  ],
  declarations: [
    components.UserMenuComponent,
    components.UserClaimsComponent
  ],
  exports: [
    components.UserMenuComponent
  ]
})

export class NgSecurityModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgSecurityModule,
      providers: [
        services.SecurityUserService,
        services.AuthorizationGuardService,
        services.RouteAuthorizationService,
        AdalService
      ],
    };
  }
}
