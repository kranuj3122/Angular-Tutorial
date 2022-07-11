import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedTag]',
})
export class RedTagDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.fontStyle = 'italic';
  }
}
