import { Directive, Input, SimpleChanges, Renderer2, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[highlightNumber]'
})

export  class HighlightNumberDirective implements OnChanges {

  // @Input() searchedWords: string = "";
  @Input() text: string = "";
  @Input() classToApply: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("23",this.searchedWords);
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

  // containsOnlyNumbers(str:any) {
  //   return /^\d+$/.test(str);
  // }

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
    
    // let filterArray = [];
    // let re;
    // console.log("re",this.searchedWords);
    
    // if(this.searchedWords != null){
      // if(/^\d+$/.test(this.searchedWords)){
      //   console.log(this.searchedWords);
      //   // var regx = new RegExp(`[123]+\d(?:$|\W)`, 'g');
      //   var regx = /\d+(?:$|\W)/g;
      //   console.warn(regx);
        
      //   return this.text.replace(regx, `<span class="${this.classToApply}">${this.searchedWords} </span>`);
      // }
      // else{
      //   return this.text;
      // }

      //  /[${this.searchedWords}]+\d(?:$|\W)/
    }


    //   re = new RegExp(`(${ filterArray.join('|') })`, 'g');
    //   console.log("join re",re);
      
    // }
    // else{
    //   re = "";
    // }
    
    // if(this.containsOnlyNumbers(re)){
    //   console.log('t');
      
      // return this.text.replace(re, `<span class="${this.classToApply}">$1</span>`);
    // }
    // else{
    //   console.log('f');
    //   return this.text;
    // }
  // }
    
  

}
