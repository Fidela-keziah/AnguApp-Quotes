import { Directive,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightvote]'
})
export class HighlightvoteDirective {

  constructor(private elem:ElementRef) { 

  }
@HostListener("click") onclicks(){
  this.textDeco("blue")
}
@HostListener("dblclick") onDoubleClicks(){
  this.textDeco("None")
}
private textDeco(action:string){
  this.elem.nativeElement.style.textDecoration=action;

}
}
