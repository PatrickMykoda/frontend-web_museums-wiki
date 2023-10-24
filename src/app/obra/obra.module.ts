import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObraListComponent } from './obra-list/obra-list.component';
import { ObraDetailComponent } from './obra-detail/obra-detail.component';
import { RouterModule } from '@angular/router';
import { ObraCreateComponent } from './obra-create/obra-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ObraListComponent],
  declarations: [ObraListComponent, ObraDetailComponent, ObraCreateComponent]
})
export class ObraModule { }
