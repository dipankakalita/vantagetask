import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightNumbComponent } from './highlight-numb.component';

const routes: Routes = [{ path: '', component: HighlightNumbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighlightNumbRoutingModule { }
