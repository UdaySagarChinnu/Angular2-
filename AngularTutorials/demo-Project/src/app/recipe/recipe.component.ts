import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServiceService } from './recipe-service.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  selectedRecipeItem : Recipe;
  constructor(private recipeservice : RecipeServiceService) { }

  ngOnInit() {
    this.recipeservice.SelectedRecipe
    .subscribe((recipe:Recipe)=>{
      this.selectedRecipeItem = recipe;
    })
  }

  
}
