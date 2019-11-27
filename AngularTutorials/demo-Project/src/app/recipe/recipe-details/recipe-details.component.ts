import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../recipe.model';
import {ShoppingServiceService} from '../../shopping-list/shopping-service.service';
import { Ingridents } from 'src/app/shared/Ingridents.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() itemEl:Recipe;

imageFlag = false;
imgFlag = true;

  constructor(private shoppingservice:ShoppingServiceService) { }

  ngOnInit() {
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

}
