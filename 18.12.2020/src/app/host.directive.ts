import { Directive, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor() { }
  @HostListener('mouseenter') mouseenter(event: Event){
   
    this.initialcolor="rgb(113, 170, 221)";
    this.color="white";
   }
   @HostListener('mouseleave') mouseleave(event: Event){
   
    this.initialcolor="white";
    this.color="black";
   }
  @HostBinding('style.backgroundColor') initialcolor : string;
  @HostBinding('style.color') color : string;
}
