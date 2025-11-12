import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Product } from '../catalog/models/product';

@Directive({
  selector: '[appProductHighlight]',
  standalone: true
})
export class ProductHighlightDirective implements OnInit {
  @Input() appProductHighlight!: Product 

  constructor(private el:ElementRef,private renderer: Renderer2) { }

  ngOnInit(): void {
    if(this.appProductHighlight.discount)
    {
      this.renderer.setStyle(this.el.nativeElement,'border','2px solid red');
    }
    if(this.appProductHighlight.stock===0)
    {
      this.renderer.setStyle(this.el.nativeElement,'opacity','0.5');
      this.renderer.setStyle(this.el.nativeElement,'pointer-events','none');
      this.renderer.setStyle(this.el.nativeElement,'cursor','default');
    }
  }

}
