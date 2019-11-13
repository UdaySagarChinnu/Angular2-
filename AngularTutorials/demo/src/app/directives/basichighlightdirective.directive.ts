import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasichighlightdirective]'
})
export class BasichighlightdirectiveDirective implements OnInit {

@Input() defaultBg:string="transperant";
@Input() downlighted:string;
@Input() highlight:string;


@HostBinding("style.backgroundColor") backgroundColor:string="lightgreen";
  constructor(private eleRef : ElementRef,private reference : Renderer2) { }

ngOnInit(){
  this.backgroundColor= this.defaultBg;
}
 @HostListener('mouseenter') onMouseOver()
  {
    //this.reference.setStyle(this.eleRef.nativeElement,"backgroundColor","lightblue");
    this.backgroundColor=this.highlight;
  }

  @HostListener('mouseleave') onMouseOut()
  {
    //this.reference.setStyle(this.eleRef.nativeElement,"backgroundColor","lightgreen");
    this.backgroundColor= this.downlighted;
  }

}
