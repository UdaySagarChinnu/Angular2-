import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  goUser(){
    this.route.navigate(['Users',5,'Mohan'])
  }

}
