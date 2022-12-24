import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightNumbRoutingModule } from './highlight-numb-routing.module';
import { HighlightNumbComponent } from './highlight-numb.component';
import { HighlightNumberDirective } from './../directives/highlight-number.directive';


@NgModule({
  declarations: [
    HighlightNumbComponent,
    HighlightNumberDirective
  ],
  imports: [
    CommonModule,
    HighlightNumbRoutingModule,
    ReactiveFormsModule
  ]
})

export class HighlightNumbModule { }
