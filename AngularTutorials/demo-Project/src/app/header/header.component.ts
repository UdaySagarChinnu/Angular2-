import { Component, OnInit ,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() loadingOption = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(option:string){
   
    this.loadingOption.emit(option);
  }
}
