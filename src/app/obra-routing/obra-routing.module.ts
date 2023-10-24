import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObraDetailComponent } from '../obra/obra-detail/obra-detail.component';
import { ObraListComponent } from '../obra/obra-list/obra-list.component';
import { ObraCreateComponent } from '../obra/obra-create/obra-create.component';

const routes: Routes = [{
  path: 'artworks',
  children: [
    {
      path: 'create',
      component: ObraCreateComponent
    },
    {
      path: 'list',
      component: ObraListComponent
    },
    {
      path: ':id',
      component: ObraDetailComponent
    },
  ]
 }];

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class ObraRoutingModule { }
