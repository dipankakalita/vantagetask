import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[highlightNumber]'
})

export  class HighlightNumberDirective implements OnChanges {

  @Input() text: string = "";
  @Input() classToApply: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.text || !this.text.length || !this.classToApply) {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
      return;
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.getFormattedText()
    );
  }
  getFormattedText() {
    let data = this.text.split(" ");
    for(let i=0; i<data.length;i++){
      if(/^\d+$/.test(data[i])){
        data[i] = `<span class="${this.classToApply}">${data[i]} </span>`
      }
    }
    console.log(data);
    console.log(data.join(' '));
    return data.join(' ');
    }
}
