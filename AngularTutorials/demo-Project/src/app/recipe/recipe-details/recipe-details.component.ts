import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../recipe.model';
import {ShoppingServiceService} from '../../shopping-list/shopping-service.service';
import { Ingridents } from '../../shared/Ingridents.model';

import { RecipeServiceService } from '../recipe-service.service';
import { ActivatedRoute, Params, RouterModule,Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
//@Input() itemEl:Recipe;
id:number;
imageFlag = false;
imgFlag = true;
itemEl:Recipe;
  constructor(private routes : Router,private shoppingservice:ShoppingServiceService,private route : ActivatedRoute,private recipeservice : RecipeServiceService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params:Params)=>{
      this.id = params['id'];
      this.itemEl = this.recipeservice.getRecipeById(this.id);
    })
  }

  zoom()
  {
    this.imageFlag = true;
    this.imgFlag = false;
  }

  zoomOut()
  {
    this.imageFlag = false;
    this.imgFlag = true;
  }

  addIngridents(ingrident:Ingridents[]){
    console.log("details:",ingrident)
    this.shoppingservice.addSelectedIngridents(ingrident);
  }

  onEditClick(){
    this.routes.navigate(['edit'],{relativeTo:this.route})
  }

}
