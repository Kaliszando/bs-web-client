import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoDto } from "../../api/models";
import { ContextEndpointService } from "../../api/services/context-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class InitContextResolver implements Resolve<UserInfoDto> {

  constructor(private contextEndpointService: ContextEndpointService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInfoDto> {
    return this.contextEndpointService.getAppContext();
  }
}
