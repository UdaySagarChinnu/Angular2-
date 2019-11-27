import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 // @Output() selectedItem = new EventEmitter<Recipe>()
// recipeList:Recipe[]=[{name:"StrawBerry",description:"Fruit",image:"../assets/images/STRAWBERRIEDS.jpg"},
//                       {name:"Pomogranite",description:"Fruit",image:"../assets/images/999999-31271.jpg"},
//                       {name:"Apple",description:"Fruit",image:"../assets/images/Apple_A-Z Fruit1.jpg"},
//                       {name:"Sapota",description:"Fruit",image:"../assets/images/106918083-fresh-sapodilla-fruit-with-green-leaf-isolated-on-white-background.jpg"},
//                       {name:"Orange",description:"Fruit",image:"../assets/images/orange-web.jpg"},
//                       {name:"Gova",description:"Fruit",image:"../assets/images/guava_copy.jpg"}];

recipeList:Recipe[];
  constructor( public recipeservice: RecipeServiceService) { }

  ngOnInit() {
    this.recipeList = this.recipeservice.getRecipeList();
  }

  // element(items:Recipe){

  //   this.selectedItem.emit(items);

  // }

}
