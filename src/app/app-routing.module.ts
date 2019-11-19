import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [

  { path: 'infiScroll', loadChildren: () => import('./infinite-scrolling/infinite-scrolling.module').then(m => m.InfiniteScrollingModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
