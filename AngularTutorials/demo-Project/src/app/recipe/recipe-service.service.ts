import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

   SelectedRecipe = new EventEmitter<Recipe>();

  recipeList:Recipe[]=[{name:"StrawBerry",description:"Fruit",image:"../assets/images/STRAWBERRIEDS.jpg"},
  {name:"Pomogranite",description:"Fruit",image:"../assets/images/999999-31271.jpg"},
  {name:"Apple",description:"Fruit",image:"../assets/images/Apple_A-Z Fruit1.jpg"},
  {name:"Sapota",description:"Fruit",image:"../assets/images/106918083-fresh-sapodilla-fruit-with-green-leaf-isolated-on-white-background.jpg"},
  {name:"Orange",description:"Fruit",image:"../assets/images/orange-web.jpg"},
  {name:"Gova",description:"Fruit",image:"../assets/images/guava_copy.jpg"}];
  constructor() { }
}
