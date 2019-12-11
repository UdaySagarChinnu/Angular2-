import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingridents } from './../shared/Ingridents.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

   SelectedRecipe = new EventEmitter<Recipe>();

 private recipeList:Recipe[]=[
  {name:"StrawBerry",description:"Fruit",image:"../assets/images/STRAWBERRIEDS.jpg",ingridents:[{name:"BerryMilk",amount:"400"},
    {name:"BerryAccence",amount:"500"}]},
  {name:"Pomogranite",description:"Fruit",image:"../assets/images/999999-31271.jpg",ingridents:[{name:"PomograniteMilk",amount:"300"},
  {name:"PomograniteAccence",amount:"400"}]},
  {name:"Apple",description:"Fruit",image:"../assets/images/Apple_A-Z Fruit1.jpg",ingridents:[{name:"AppleMilk",amount:"350"},
  {name:"AppleAccence",amount:"500"}]},
  {name:"Sapota",description:"Fruit",image:"../assets/images/106918083-fresh-sapodilla-fruit-with-green-leaf-isolated-on-white-background.jpg",ingridents:[{name:"SapotaMilk",amount:"250"},
  {name:"SapotaAccence",amount:"250"}]},
  {name:"Orange",description:"Fruit",image:"../assets/images/orange-web.jpg",ingridents:[{name:"OrangeMilk",amount:"150"},
  {name:"OrangeAccence",amount:"200"}]},
  {name:"Gova",description:"Fruit",image:"../assets/images/guava_copy.jpg",ingridents:[{name:"GovaMilk",amount:"100"},
  {name:"GovaAccence",amount:"200"}]}
];
  constructor() { }

  getRecipeList(){
    return this.recipeList.slice();

  }
  
  getRecipeById(id:number){
    return this.recipeList[id];
  }
}
