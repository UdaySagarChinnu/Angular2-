import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundcolor]'
})
export class BackgroundcolorDirective {

@HostBinding('style.backgroundColor') backgroundColor:string;
@HostBinding('style.color') color:string = "grey";

  constructor(private _el:ElementRef) { }

  @HostListener('mouseenter') changeStyle(){

    this.backgroundColor="lightblue" ;
    this.color="red"
  
   }

   
  @HostListener('mouseleave') changeBg(){

    this.backgroundColor="transparent" ;
    this.color="grey";
  
   }

}
