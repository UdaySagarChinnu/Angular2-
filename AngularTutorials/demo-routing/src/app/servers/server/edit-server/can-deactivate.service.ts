import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanDeactivateInter {
  canDeactive(): Observable<boolean> | Promise<boolean> | boolean
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<CanDeactivateInter>{

  canDeactivate(component:CanDeactivateInter,router:ActivatedRouteSnapshot,routerState:RouterStateSnapshot,):Observable<boolean> | Promise<boolean> | boolean
  {
    return component.canDeactive();
  }

  constructor() { }
}
