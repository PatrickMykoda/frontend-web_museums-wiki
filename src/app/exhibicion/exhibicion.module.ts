import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibicionListComponent } from './exhibicion-list/exhibicion-list.component';
import { ExhibicionDetailComponent } from './exhibicion-detail/exhibicion-detail.component';
import { RouterModule } from '@angular/router';
import { ExhibicionRoutingModule } from '../exhibicion-routing/exhibicion-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExhibicionCreateComponent } from './exhibicion-create/exhibicion-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ExhibicionRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ExhibicionListComponent, ExhibicionCreateComponent],
  declarations: [ExhibicionListComponent, ExhibicionDetailComponent, ExhibicionCreateComponent]
})
export class ExhibicionModule { }
