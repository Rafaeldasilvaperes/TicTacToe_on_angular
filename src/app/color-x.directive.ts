import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorX]'
})
export class ColorXDirective {

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.backgroundColor = 'rgb(200, 235, 9)'
  }
  }

