import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import { SponsorDetailComponent } from './sponsor-detail/sponsor-detail.component';
import { RouterModule } from '@angular/router';
import { SponsorCreateComponent } from './sponsor-create/sponsor-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [SponsorListComponent],
  declarations: [SponsorListComponent, SponsorDetailComponent, SponsorCreateComponent]
})
export class SponsorModule { }
