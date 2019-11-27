import { Component, OnInit } from '@angular/core';
import { Ingridents } from '../shared/Ingridents.model'
import { ShoppingServiceService } from './shopping-service.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingridents:Ingridents[]=[{name:"Elachi",amount:"50"},
  //                           {name:"FruitFlaver",amount:"500"},
  //                           {name:"FruitMilk",amount:"50"},
  //                           {name:"ChocoShake",amount:"300"}]

  ingridents:Ingridents[]
  constructor(private shoppingservice : ShoppingServiceService) { }

  ngOnInit() {
    this.ingridents = this.shoppingservice.getShoppingList();
    this.shoppingservice.changeedIngrident
    .subscribe((ingrident:Ingridents[])=>{
      this.ingridents = ingrident;
    })
  }

  // addCartList(evt)
  // {
  //   this.ingridents.push(evt);
  // }
}
