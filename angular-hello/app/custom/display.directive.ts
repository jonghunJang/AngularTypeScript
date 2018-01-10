import {Directive, ElementRef} from "@angular/core";

@Directive({
    selector:'[myHidden]'
})
export class MyDisplayDirective{
    private hiddenDisplay:string = "none";

    constructor(private el : ElementRef) {
        this.el = el;
        // this.hide();
    }

    hide(){
        this.el.nativeElement.style.display=this.hiddenDisplay;
    }
}