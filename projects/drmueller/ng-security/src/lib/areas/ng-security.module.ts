import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AdalService } from 'adal-angular4';

import * as components from './components';
import * as services from './services';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';

@NgModule({
  imports: [
    CommonModule,
    NgMaterialExtensionsModule
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
