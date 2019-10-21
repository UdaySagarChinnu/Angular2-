import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipeList:Recipe[]=[{name:"Mango",description:"Fruit",image:"image1"},
                      {name:"Orange",description:"Fruit",image:"image2"},
                      {name:"Banana",description:"Fruit",image:"image3"},
                      {name:"Sapota",description:"Fruit",image:"image4"}];
  constructor() { }

  ngOnInit() {
  }

}
