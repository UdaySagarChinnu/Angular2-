import { Injectable, EventEmitter } from '@angular/core';

import { Ingridents } from './../shared/Ingridents.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {
  changeedIngrident = new EventEmitter<Ingridents[]>()
  private ingridents:Ingridents[]=[{name:"Elachi",amount:"50"},
  {name:"FruitFlaver",amount:"500"},
  {name:"FruitMilk",amount:"50"},
  {name:"ChocoShake",amount:"300"}]
  constructor() { }

  getShoppingList(){
    return this.ingridents.slice();
  }

  addIngridents(newingridents : Ingridents)
  {
    this.ingridents.push(newingridents)
    this.changeedIngrident.emit(this.ingridents.slice())
  }

  addSelectedIngridents(newingridents : Ingridents[]){
    console.log("inside :",newingridents)
    this.ingridents.push(...newingridents);
    this.changeedIngrident.emit(this.ingridents.slice());
  }
}
