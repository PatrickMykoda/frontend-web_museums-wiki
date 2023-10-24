import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseoListComponent } from './museo-list/museo-list.component';
import { MuseoDetailComponent } from './museo-detail/museo-detail.component';
import { RouterModule } from '@angular/router';
import { MuseoRoutingModule } from '../museo-routing/museo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MuseoCreateComponent } from './museo-create/museo-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MuseoRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MuseoListComponent, MuseoDetailComponent, MuseoCreateComponent],
  exports: [MuseoListComponent, MuseoDetailComponent, MuseoCreateComponent]
})
export class MuseoModule { }
