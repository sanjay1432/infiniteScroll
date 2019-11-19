import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfiniteScrollingRoutingModule } from './infinite-scrolling-routing.module';
import { InfiniteScrollingComponent } from './infinite-scrolling.component';


@NgModule({
  declarations: [InfiniteScrollingComponent],
  imports: [
    CommonModule,
    InfiniteScrollingRoutingModule
  ]
})
export class InfiniteScrollingModule { }
