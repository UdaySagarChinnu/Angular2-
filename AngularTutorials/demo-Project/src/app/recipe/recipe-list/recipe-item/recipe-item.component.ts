import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../../recipe.model';

import { RecipeServiceService } from './../../recipe-service.service';
import { ActivatedRouteSnapshot, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() item : {name:string,description:string,image:string}
@Input() index : number;
// @Output() selectedItem = new EventEmitter<void>()
  //constructor(private recipeservice : RecipeServiceService) { }
  //constructor(private route :ActivatedRouteSnapshot,private recipeservice : RecipeServiceService){

  //}
  
  
  ngOnInit() {

    
  }
  // onItemSelect(item){
  //   this.recipeservice.SelectedRecipe.emit(item);
  
  
   
}
