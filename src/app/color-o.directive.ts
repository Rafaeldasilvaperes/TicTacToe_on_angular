import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorO]'
})
export class ColorODirective {

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.backgroundColor = 'rgb(100, 42, 42)'
  }

}
