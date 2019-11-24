import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AccountModel } from '../shared/account.model'


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
@Input() id:number;
@Input() items:{name:string,status:string};
@Output() accountStatus = new EventEmitter<{id: number, newStatus: string}>();
 


  updatestatus(status){
    this.accountStatus.emit({id:this.id,newStatus:status});
  }

}
