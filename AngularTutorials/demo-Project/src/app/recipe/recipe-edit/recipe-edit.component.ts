import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit,AfterViewInit {

  
  @ViewChild('name',{static:false}) name:ElementRef;
  
  @ViewChild('description',{static:false}) description:ElementRef;
  
  @ViewChild('image',{static:false}) image:ElementRef;
  index:number;
  recpieItem : Recipe;
  editItem : Recipe;

  constructor(private route : ActivatedRoute,private recipeService : RecipeServiceService) { }

  ngOnInit() {
   this.route.params
   .subscribe((params:Params)=>{
     this.index = params['id'];
     this.recpieItem = this.recipeService.getRecipeById(this.index);
   })
  }

   ngAfterViewInit()
   {
    this.name.nativeElement.value = this.recpieItem.name;
    this.description.nativeElement.value = this.recpieItem.description;
    this.image.nativeElement.value = this.recpieItem.image;

   }
    
   changeRecipe(){
    this.recpieItem.name = this.name.nativeElement.value;
    this.recpieItem.description = this.description.nativeElement.value;
    this.recpieItem.image = this.image.nativeElement.value;
    this.recipeService.updateRecipe(this.index,this.recpieItem);
   }

  onClear(){

    this.name.nativeElement.value = "";
    this.description.nativeElement.value = ""
    this.image.nativeElement.value = ""
  }

}
