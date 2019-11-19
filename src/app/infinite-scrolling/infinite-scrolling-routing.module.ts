import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiniteScrollingComponent } from './infinite-scrolling.component';

const routes: Routes = [{ path: '', component: InfiniteScrollingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfiniteScrollingRoutingModule { }
