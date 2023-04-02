import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[skateBorderCard]'
})
export class BorderCardDirective {

  constructor(private el:ElementRef) {
    this.setBorder("#f5f5f5");
    this.setHeight(290);
   }

@HostListener('mouseenter') onMouseEnter(){
  //console.log('Entre');
  this.setBorder('#009688');
}
@HostListener('mouseleave') onMouseLeave(){
  //console.log('sort');
  this.setBorder('#f5f5f5');
}
  private setHeight(height:number){
    this.el.nativeElement.style.height=`${height}px`;

  }

  private setBorder(color:string){
    let border='solid 4px ' +color;
    this.el.nativeElement.style.border=border;
  }
}
