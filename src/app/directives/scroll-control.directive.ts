import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollControl]',
})
export class ScrollControlDirective {
  constructor(private element: ElementRef) {}
  @HostListener('window:scroll', [])
  onOpenPopup() {
    if (this.element.nativeElement.classList.contains('disableScroll')) {
      window.scrollTo(0, 0);
    }
  }
}
