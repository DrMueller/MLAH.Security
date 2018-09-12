import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgMaterialExtensionsModule } from '@drmueller/ng-material-extensions';
import { CommonModule } from '@angular/common';

import { AdalService} from 'adal-angular4';

import * as components from './components';
import * as services from './services';

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
