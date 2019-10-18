import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Output() defaultServer = new EventEmitter<{name:string,content:string}>()
  @Output() bluePrinttServer = new EventEmitter<{name:string,content:string}>()

  servername:string;
  servercontent:string;
  

  constructor() { }

  ngOnInit() {
  }


  addDefaultServer = ()=>{

   this.defaultServer.emit({name:this.servername,content:this.servercontent})
    
  }

  addBluePrinttServer = ()=>{
    this.bluePrinttServer.emit({name:this.servername,content:this.servercontent})
  }

}
