import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'infiniteScroll', loadChildren: () => import('./infinite-image-scroll/infinite-image-scroll.module').then(m => m.InfiniteImageScrollModule) }, 
{ path: 'highlightNumber', loadChildren: () => import('./highlight-numb/highlight-numb.module').then(m => m.HighlightNumbModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
