import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoDto } from "../../api/models";
import { StoreService } from "../service/store.service";
import { ContextEndpointService } from "../../api/services/context-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class InitContextResolver implements Resolve<UserInfoDto> {

  constructor(private contextEndpointService: ContextEndpointService,
              private store: StoreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInfoDto> {
    this.store.reloadMockContext();
    return this.contextEndpointService.getAppContext();
  }
}
