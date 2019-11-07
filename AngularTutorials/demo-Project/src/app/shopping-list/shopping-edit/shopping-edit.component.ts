import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingridents } from './../../shared/Ingridents.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() cartList = new EventEmitter<{name:string,amount:string}>();

  @ViewChild("nameInput",{static:false})nameInput:ElementRef;
  @ViewChild("amountInput",{static:false})amountInput:ElementRef;


  constructor() { }

  ngOnInit() {
  }

  addToShoppingCart(){
   
    console.log(this.nameInput.nativeElement.value);
    if(this.nameInput.nativeElement.value !=="" && this.amountInput.nativeElement.value !== "")
    {
    this.cartList.emit({name:this.nameInput.nativeElement.value,amount:this.amountInput.nativeElement.value})
    this.nameInput.nativeElement.value="";
    this.amountInput.nativeElement.value="";
    }

  }

}
