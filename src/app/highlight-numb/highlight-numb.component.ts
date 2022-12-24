import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-highlight-numb',
  templateUrl: './highlight-numb.component.html',
  styleUrls: ['./highlight-numb.component.scss']
})
export class HighlightNumbComponent {
  text:any = new FormControl('Steve is 26 years old but people think he is 76years. His DOB is 26 Jan 1997')
  searchedWordsControl:any = new FormControl('')

  // searchedWords$: Observable<string[]> = this .searchedWordsControl .valueChanges .pipe( map((search: string) => search.trim().split(' ')) )
  
  constructor(){
  }
}
