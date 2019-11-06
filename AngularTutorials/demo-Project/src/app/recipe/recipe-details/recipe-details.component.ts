import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() itemEl:Recipe;

imageFlag = false;
imgFlag = true;

  constructor() { }

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

}
