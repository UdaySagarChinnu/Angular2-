import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Output() servercreated = new EventEmitter<{name:string,content:string}>();
  @Output() blueprintcreated = new EventEmitter<{name:string,content:string}>();
  server:any=[];
  count:number=1;
  //newserver={};
  //newServerName;
  //newServerContent;
  newAddedServer=[];


@ViewChild('newServerName',{static:false}) newServerName:ElementRef;
@ViewChild('newServerContent',{static:false}) newServerContent:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
   
    this.server.push("Another Server"+this.count);
    this.count++;
  }

  onRemove(ser:number){
    this.server.splice(ser,1);
  }

  // addNewServer(){
  //   this.servercreated.emit({name:this.newServerName,content:this.newServerContent})
  // }

  // addNewServer(newServerName:HTMLInputElement,newServerContent:HTMLInputElement){
  //   this.servercreated.emit({name:newServerName.value,content:newServerContent.value})
  // }

  addNewServer(){
    this.servercreated.emit({name:this.newServerName.nativeElement.value,content:this.newServerContent.nativeElement.value})
  }

  // addNewServerBluePrint(){
  //   this.blueprintcreated.emit({name:this.newServerName,content:this.newServerContent})
  // }

  // addNewServerBluePrint(newServerName:HTMLInputElement,newServerContent:HTMLInputElement){
  //   this.blueprintcreated.emit({name:newServerName.value,content:newServerContent.value})
  // }

  addNewServerBluePrint(){
    this.blueprintcreated.emit({name:this.newServerName.nativeElement.value,content:this.newServerContent.nativeElement.value})
  }



}
