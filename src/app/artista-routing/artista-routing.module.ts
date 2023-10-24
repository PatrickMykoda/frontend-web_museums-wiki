import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaDetailComponent } from '../artista/artista-detail/artista-detail.component';
import { ArtistaListComponent } from '../artista/artista-list/artista-list.component';
import { ArtistaCreateComponent } from '../artista/artista-create/artista-create.component';

const routes: Routes = [{
  path: 'artists',
  children: [
    {
      path: 'create',
      component: ArtistaCreateComponent
    },
    {
      path: 'list',
      component: ArtistaListComponent
    },
    {
      path: ':id',
      component: ArtistaDetailComponent
    },
  ]
 }];

 @NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
 })
 export class ArtistaRoutingModule { }
