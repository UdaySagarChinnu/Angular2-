import { Injectable } from '@angular/core';
import { AccountModel } from "../shared/account.model"

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor() { }

  bankAccounts = [{name:"Savings",status:"Active"},
                  {name:"Current",status:"InActive"},
                  {name:"Fixed",status:"Blocked"}]

  addAccount(item){
    this.bankAccounts.push(item);
  }

  updateAccount(item){
    console.log("update method :",item.newStatus);
    this.bankAccounts[item.id].status = item.newStatus;

  }
}
