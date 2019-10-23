import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-Project';
  loadPage:string = "recipe";

  onNavigate(option:string)
  {
    this.loadPage = option;
  }
}
