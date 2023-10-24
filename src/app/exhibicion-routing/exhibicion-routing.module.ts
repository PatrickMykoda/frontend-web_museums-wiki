import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibicionDetailComponent } from '../exhibicion/exhibicion-detail/exhibicion-detail.component';
import { ExhibicionListComponent } from '../exhibicion/exhibicion-list/exhibicion-list.component';
import { ExhibicionCreateComponent } from '../exhibicion/exhibicion-create/exhibicion-create.component';

const routes: Routes = [{
  path: 'exhibiciones',
  children: [
    {
      path: 'create',
      component: ExhibicionCreateComponent
    },
    {
      path: 'list',
      component: ExhibicionListComponent
    },
    {
      path: ':id',
      component: ExhibicionDetailComponent
    },
  ]
 }];

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class ExhibicionRoutingModule { }
