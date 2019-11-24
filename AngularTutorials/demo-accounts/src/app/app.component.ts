import { Component, Input } from '@angular/core';
import { AccountModel } from './shared/account.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-accounts';
  
  addBankAccount :AccountModel[]=[];


  addAccount(one)
  {
    
    this.addBankAccount.push(one);
    
  }
  updateStatus(event:{id:number,newStatus:string})
  {
    this.addBankAccount[event.id].status=event.newStatus;
  }
}
