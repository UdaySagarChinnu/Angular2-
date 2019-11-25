import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AccountModel } from '../shared/account.model';
import { AccountServiceService } from '../services/account-service.service'


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
@Input() id:number;
@Input() items:{name:string,status:string};
@Output() accountStatus = new EventEmitter<{id: number, newStatus: string}>();
 
constructor(public statusUpdate:AccountServiceService){

}

  // updatestatus(status){
  //   this.accountStatus.emit({id:this.id,newStatus:status});
  // }

  updatestatus(status){
    let update = {id:this.id,newStatus:status}
    this.statusUpdate.updateAccount(update)
  }

}
