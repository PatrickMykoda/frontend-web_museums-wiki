import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistaListComponent } from './artista-list/artista-list.component';
import { ArtistaDetailComponent } from './artista-detail/artista-detail.component';
import { RouterModule } from '@angular/router';
import { ArtistaCreateComponent } from './artista-create/artista-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[ArtistaListComponent],
  declarations: [ArtistaListComponent, ArtistaDetailComponent, ArtistaCreateComponent]
})
export class ArtistaModule { }
