import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Output() defaultServer = new EventEmitter<{name:string,content:string}>()
  @Output() bluePrinttServer = new EventEmitter<{name:string,content:string}>()

  //  servername:string;
  //  servercontent:string;
  
  @ViewChild('servername',{static:false}) servername:ElementRef;
  @ViewChild('servercontent',{static:false}) servercontent:ElementRef;

  constructor() { }

  ngOnInit() {
  }


  // addDefaultServer = ()=>{
  //  
  //   console.log("name",this.servername)
  //   console.log("content",this.servercontent)
  
  //  this.defaultServer.emit({name:this.servername,content:this.servercontent})
    
  // }

  // addBluePrinttServer = ()=>{
  //   
  //   this.bluePrinttServer.emit({name:this.servername,content:this.servercontent})
  // }
/*on using local reference element*/
  // addDefaultServer = (servername:HTMLInputElement,servercontent:HTMLInputElement)=>{
  //   this.servername = servername.value;
  //   this.servercontent = servercontent.value;
  //   console.log("name",this.servername)
  //   console.log("content",this.servercontent)
  
  //  this.defaultServer.emit({name:this.servername,content:this.servercontent})
    
  // }

  // addBluePrinttServer = (servername:HTMLInputElement,servercontent:HTMLInputElement)=>{
  //   this.servername = servername.value;
  //   this.servercontent = servercontent.value;
  //   this.bluePrinttServer.emit({name:this.servername,content:this.servercontent})
  // }

  /*on using viechchild element*/
  addDefaultServer = ()=>{
    
    console.log("name",this.servername)
    console.log("content",this.servercontent)
  
   this.defaultServer.emit({name:this.servername.nativeElement.value,content:this.servercontent.nativeElement.value})
    
  }

  addBluePrinttServer = ()=>{
    
    this.bluePrinttServer.emit({name:this.servername.nativeElement.value,content:this.servercontent.nativeElement.value})
  }

}
