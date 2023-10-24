import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuseoDetailComponent } from '../museo/museo-detail/museo-detail.component';
import { MuseoListComponent } from '../museo/museo-list/museo-list.component';
import { MuseoCreateComponent } from '../museo/museo-create/museo-create.component';

const routes: Routes = [{
  path: 'museums',
  children: [
    {
      path: 'create',
      component: MuseoCreateComponent
    },
    {
      path: 'list',
      component: MuseoListComponent
    },
    {
      path: ':id',
      component: MuseoDetailComponent
    },
  ]
 }];

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class MuseoRoutingModule { }
