import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newAddedServer = [];


  NewServer(serverData : {name:string,content:string}){
    this.newAddedServer.push({
      type:"Server",
      name:serverData.name,
      content:serverData.content
    })
  }

  NewServerBluePrint(bluePrint : {name:string,content:string}){
    this.newAddedServer.push({
      type:"BluePrint",
      name:bluePrint.name,
      content:bluePrint.content
    })
  }

}
