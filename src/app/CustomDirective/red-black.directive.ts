import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedBlack]'
})
export class RedBlackDirective implements OnInit{
  element:ElementRef;
  constructor(private el:ElementRef) {
    // debugger;
    console.log(el);
    el.nativeElement.style.color="white";
    el.nativeElement.style.backgroundColor="red";
     this.element=el;
   }
  ngOnInit(): void {
    this.element.nativeElement.innerText+=" - Render by redBalckApp";
  }

}
