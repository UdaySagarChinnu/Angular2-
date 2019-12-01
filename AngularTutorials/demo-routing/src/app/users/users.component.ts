import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  queryFormate:any;
  constructor(private router : Router,private rout :ActivatedRoute) { }
  Users=[
        {id:1,name:"Rohan"},
        {id:2,name:"Sohan"},
        {id:3,name:"Mohan"}
        ]

  ngOnInit() {
    this.queryFormate = this.rout.snapshot.queryParams;
    console.log("allowed :"+this.queryFormate.allow);
    console.log("name :"+this.queryFormate.name);
  }

  goServerPage(){
    this.router.navigate(['Servers'])
  }

}
