import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CampusRopeIScrollComponent} from './campus-rope-iscroll/campus-rope-iscroll.component'
const routes: Routes = [{ path: 'infiScroll',  component: CampusRopeIScrollComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
