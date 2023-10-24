import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovimientoDetailComponent } from '../movimiento/movimiento-detail/movimiento-detail.component';
import { MovimientoListComponent } from '../movimiento/movimiento-list/movimiento-list.component';
import { MovimientoCreateComponent } from '../movimiento/movimiento-create/movimiento-create.component';


const routes: Routes = [{
  path: 'movements',
  children: [
    {
      path: 'create',
      component: MovimientoCreateComponent
    },
    {
      path: 'list',
      component: MovimientoListComponent
    },
    {
      path: ':id',
      component: MovimientoDetailComponent
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientoRoutingModule { }
