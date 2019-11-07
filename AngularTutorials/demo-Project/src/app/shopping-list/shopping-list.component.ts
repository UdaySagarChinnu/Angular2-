import { Component, OnInit } from '@angular/core';
import { Ingridents } from '../shared/Ingridents.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridents:Ingridents[]=[{name:"Elachi",amount:"50"},
                            {name:"FruitFlaver",amount:"500"},
                            {name:"FruitMilk",amount:"50"},
                            {name:"ChocoShake",amount:"300"}]
  constructor() { }

  ngOnInit() {
  }

  addCartList(evt)
  {
    this.ingridents.push(evt);
  }
}
