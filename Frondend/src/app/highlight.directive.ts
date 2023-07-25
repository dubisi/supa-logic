import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  @Input() appHighlight ='';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onmouseenter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.appHighlight);
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
