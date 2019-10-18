import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  serverArray :any[]=[];

  newDefaultServer = (serverData : {name:string,content:string})=>{
    console.log("serverdata :"+serverData)
    this.serverArray.push({
      type:"defultServer",
      name:serverData.name,
      content:serverData.content
    })
  }

  newBluePrintServer = (bluePrint : {name:string,content:string})=>{
    this.serverArray.push({
      type:"bluePrintServer",
      name:bluePrint.name,
      content:bluePrint.content
    })
  }


}
