import {Directive, HostListener, ElementRef} from "@angular/core";

@Directive({
    selector:'[myColor]'
})
export class MyColorDirective{
    private defaultColor:string = "blue";

    constructor(private el : ElementRef) {
        this.el = el;
    }

    setColor(color:string){
        this.el.nativeElement.style.color = color;
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.hover("red");
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.hover(this.defaultColor);
    }

    hover(color:string){
        this.setColor(color);
    }
}