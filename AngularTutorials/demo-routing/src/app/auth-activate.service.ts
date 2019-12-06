import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthActivateService implements CanActivate {

  constructor(private authservice : AuthenticationService,private route:Router) { }

  canActivate(route : ActivatedRouteSnapshot,state:RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
    return this.authservice.authCheckLogin()
    .then((authenticated:boolean)=>{
      if(authenticated){
        return true;
      }
      else{
        this.route.navigate(['/']);
      }

    })
  }
}
