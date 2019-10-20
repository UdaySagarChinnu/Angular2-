import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-server',
  templateUrl: './main-server.component.html',
  styleUrls: ['./main-server.component.css']
})
export class MainServerComponent implements OnInit {
 @Input('element') ele : {type:string,name:string,content:string};
  constructor() { 
   
  }

  ngOnInit() {
  }

}
