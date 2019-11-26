import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../../recipe.model';

import { RecipeServiceService } from './../../recipe-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() item : {name:string,description:string,image:string}
// @Output() selectedItem = new EventEmitter<void>()
  constructor(private recipeservice : RecipeServiceService) { }

  ngOnInit() {
  }
  onItemSelect(item){
    this.recipeservice.SelectedRecipe.emit(item);
  }
}
