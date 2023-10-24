import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimientoCreateComponent } from './movimiento-create/movimiento-create.component';
import { MovimientoListComponent } from './movimiento-list/movimiento-list.component';
import { MovimientoDetailComponent } from './movimiento-detail/movimiento-detail.component';
import { RouterModule } from '@angular/router';
import { MovimientoRoutingModule } from '../movimiento-routing/movimiento-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MovimientoRoutingModule,
    ReactiveFormsModule
  ],
  exports: [MovimientoListComponent],
  declarations: [MovimientoCreateComponent, MovimientoListComponent, MovimientoDetailComponent]
})
export class MovimientoModule { }
