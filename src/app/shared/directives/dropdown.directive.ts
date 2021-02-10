import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @Input('appDropdown') dropdownTargetElement: HTMLElement | undefined;
  dropdownActivatorClassName = 'show';
  isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {
  }

  @HostListener('click') onClick(eventData: Event): void {
    if (!this.isOpen) {
      this.isOpen = !this.isOpen;
      this.renderer.addClass(this.elRef.nativeElement, this.dropdownActivatorClassName);
      this.renderer.addClass(this.dropdownTargetElement, this.dropdownActivatorClassName);
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, this.dropdownActivatorClassName);
      this.renderer.removeClass(this.dropdownTargetElement, this.dropdownActivatorClassName);
    }
  }
}
