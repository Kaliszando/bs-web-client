import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ContextData } from "../../api/models";
import { ContextEndpointService } from "../../api/services/context-endpoint.service";

@Injectable({
  providedIn: 'root'
})
export class InitContextResolver implements Resolve<ContextData> {

  constructor(private contextEndpointService: ContextEndpointService) {
  }

  resolve(): Observable<ContextData> {
    return this.contextEndpointService.getAppContext();
  }
}
