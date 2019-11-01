import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedItem = new EventEmitter<Recipe>()
recipeList:Recipe[]=[{name:"StrawBerry",description:"Fruit",image:"https://www.kclu.org/sites/kclu2/files/styles/x_large/public/201808/STRAWBERRIEDS.jpg"},
                      {name:"Pomogranite",description:"Fruit",image:"https://i5.walmartimages.ca/images/Large/-31/271/999999-31271.jpg"},
                      {name:"Apple",description:"Fruit",image:"https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg"},
                      {name:"Sapota",description:"Fruit",image:"https://previews.123rf.com/images/boonchuay/boonchuay1808/boonchuay180800127/106918083-fresh-sapodilla-fruit-with-green-leaf-isolated-on-white-background.jpg"},
                      {name:"Orange",description:"Fruit",image:"https://process.fs.holonis.com/rotate=deg:exif/LoZPNSzZRZKp3GLUcqAk"},
                      {name:"Gova",description:"Fruit",image:"http://aapkarashan.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/g/u/guava_copy.jpg"}];
  constructor() { }

  ngOnInit() {
  }

  element(items:Recipe){

    this.selectedItem.emit(items);

  }

}
