import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  index:number;
  recpieItem : Recipe;
  editItem : Recipe;
  constructor(private route : ActivatedRoute,private recipeService : RecipeServiceService) { }

  ngOnInit() {
   this.route.params
   .subscribe((params:Params)=>{
     this.index = params['id'];
     this.recpieItem = this.recipeService.getRecipeById(this.index);
      this.editItem = params['edit'];
   })
    
  }

  onEdit(){
    
  }

}
