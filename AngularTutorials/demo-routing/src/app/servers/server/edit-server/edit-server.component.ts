import { Component, OnInit } from '@angular/core';
import { CanDeactivateInter } from './can-deactivate.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanDeactivateInter {

  changeType=false;
  constructor(private route:Router) { }

  ngOnInit() {
  }

  onCheck(){
    this.changeType=true;
  }

  canDeactive():Observable<boolean> | Promise<boolean> | boolean {
    if(!this.changeType)
    {
     return confirm("Do you want to leave this page");
    }
    else{
      return this.route.navigate(['/'])
    }
  }

}
