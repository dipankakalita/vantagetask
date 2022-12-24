import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteImageScrollRoutingModule } from './infinite-image-scroll-routing.module';
import { InfiniteImageScrollComponent } from './infinite-image-scroll.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    InfiniteImageScrollComponent
  ],
  imports: [
    CommonModule,
    InfiniteImageScrollRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    NgbDatepickerModule
  ]
})
export class InfiniteImageScrollModule { }
