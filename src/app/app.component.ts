import { Component, OnInit } from '@angular/core';
import { SecurityUserService, AdalConfiguration, Endpoint } from '../../projects/drmueller/ng-security/src/public_api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public constructor(
    private securityUserService: SecurityUserService) {
    this.securityUserService.initialize(<AdalConfiguration>{
      tenant: 'novacapta.de',
      clientId: '297fc587-359a-4ea5-9f2d-4b36aef9c3a1',
      redirectUri: 'http://localhost:4200/',
      endpoints: [
        new Endpoint('https://localhost:44392/', '297fc587-359a-4ea5-9f2d-4b36aef9c3a1')
      ]
    });
  }

  public getRouterOutletState(outlet: any): string {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public ngOnInit(): void {
    this.securityUserService.handleCallback();
  }
}
