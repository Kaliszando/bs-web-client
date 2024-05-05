import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoDto } from "../../api/models";
import { ContextEndpointService } from "../../api/services/context-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class InitContextResolver implements Resolve<UserInfoDto> {

  constructor(private contextEndpointService: ContextEndpointService) {
  }

  resolve(): Observable<UserInfoDto> {
    return this.contextEndpointService.getAppContext();
  }
}
