import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
login:boolean=false;
  constructor() { }

  authCheckLogin(){
    const promise = new Promise(
      (resolve,reject) => {
        setTimeout(()=>{
          resolve(this.login);
        },800)
      }
    );
      return promise;
  }

authLogin(){
   this.login = true;
   console.log("inside in " , this.login)
   return this.login;
}

authLogout(){
  this.login = false;
   console.log("inside in " , this.login)
   return  this.login;
}

}
