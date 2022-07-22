import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[TextBolder]'
})
export class DropdownDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
    
    ngOnInit() {
    }

    @HostListener('mouseenter') mouseover(event: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green')
    };

    @HostListener('mouseleave') mouseleave(event: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'transparent')
    };
  }