import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  
  constructor(private _el: ElementRef) { 

  }
  
  


  @HostBinding('class.show') isOpen: boolean =false;

 @HostBinding('style.backgroundColor') backgroundColor:string;


  @HostListener('click') toogleOpen() {
   
    this.isOpen = !this.isOpen;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.add('show')         
  }

@HostListener('document:click', ['$event.target']) close (targetElement) {
 
    let inside: boolean = this._el.nativeElement.contains(targetElement);
    if(!inside) {
        this.isOpen = false;
        this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
    }
}

 

}
