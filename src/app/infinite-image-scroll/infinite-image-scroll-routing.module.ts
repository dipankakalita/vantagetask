import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteImageScrollComponent } from './infinite-image-scroll.component';

const routes: Routes = [{ path: '', component: InfiniteImageScrollComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfiniteImageScrollRoutingModule { }
