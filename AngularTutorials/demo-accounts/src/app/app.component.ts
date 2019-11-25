import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from './shared/account.model'
import { AccountServiceService } from './services/account-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'demo-accounts';
  
  addBankAccount :AccountModel[]=[];
  constructor(public accountsinstance : AccountServiceService){

    

  }

ngOnInit(){
  this.addBankAccount = this.accountsinstance.bankAccounts;
}
  addAccount(one)
  {
    this.accountsinstance.addAccount(one);
  }
  // updateStatus(event)
  // {
  //   this.addBankAccount[event.id].status=event.newStatus;
  // }

  updateStatus(event){
    this.accountsinstance.updateAccount(event);
  }
}
