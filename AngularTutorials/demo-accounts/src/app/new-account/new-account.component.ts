import { Component, OnInit, ViewChild, Output, ElementRef,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

@Output() account = new EventEmitter<{name:string,status:string}>();  


@ViewChild("accountname",{static:false}) accountname:ElementRef;
@ViewChild("accountstatus",{static:false}) accountstatus:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  accountSubmit(){
    this.account.emit({name:this.accountname.nativeElement.value,status:this.accountstatus.nativeElement.value});
    this.accountname.nativeElement.value = "";
    this.accountstatus.nativeElement.value = "";
      
  }

}
