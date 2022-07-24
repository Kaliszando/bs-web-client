import { Injectable } from '@angular/core';
import { ReplaySubject } from "rxjs";
import { Project } from "../model/project";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  sessionToken$: ReplaySubject<string> = new ReplaySubject<string>()

  isAuthorized$: ReplaySubject<boolean> = new ReplaySubject<boolean>()

  selectedProject$: ReplaySubject<Project> = new ReplaySubject<Project>()

  availableProjects$: ReplaySubject<Project[]> = new ReplaySubject<Project[]>()

  setSessionToken(token: string | null | undefined) {
    if (token != null) {
      this.sessionToken$.next(token)
      this.isAuthorized$.next(true)
    }
    else {
      this.isAuthorized$.next(false)
      this.sessionToken$.next('')
    }
  }

  reloadMockContext(): void {
    this.selectedProject$.next({ name: 'Dupa jasia', tag: 'ASDFAA'})

    this.availableProjects$.next([
      { name: 'Hello world', tag: 'HWDP'},
      { name: 'Im awesome', tag: 'ASDFA'},
      { name: 'Dupa jasia', tag: 'ASDFAA'}
    ])
  }
}
