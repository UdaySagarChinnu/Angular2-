import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appBasicdirective]'
})
export class BasicdirectiveDirective implements OnInit {

  constructor(private elementRef :ElementRef,private renderer : Renderer2) { }

  ngOnInit(){
    //this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';

    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'lightpink');
  }

}
