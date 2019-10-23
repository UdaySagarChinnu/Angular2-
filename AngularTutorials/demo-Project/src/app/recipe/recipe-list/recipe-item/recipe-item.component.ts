import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() item : {name:string,description:string,image:string}
@Output() selectedItem = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit() {
  }
  onItemSelect(item:Recipe){
    this.selectedItem.emit(item);
  }
}
