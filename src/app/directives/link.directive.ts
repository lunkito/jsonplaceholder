import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';

@Directive({
  selector: '[appLink]'
})
export class LinkDirective {
  // Renderer: angular se hace independiente del DOM.
  constructor(private element: ElementRef, private renderer: Renderer) {
    this.downlight();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight();
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.downlight();
  }

  private highlight() {
    this.renderer.setElementStyle(this.element.nativeElement, 'fontStyle', 'italic');
  }

  private downlight() {
    this.renderer.setElementStyle(this.element.nativeElement, 'color', 'blue');
    this.renderer.setElementStyle(this.element.nativeElement, 'textDecoration', 'underline');
    this.renderer.setElementStyle(this.element.nativeElement, 'cursor', 'pointer');
    this.renderer.setElementStyle(this.element.nativeElement, 'fontStyle', 'normal');
  }
}
