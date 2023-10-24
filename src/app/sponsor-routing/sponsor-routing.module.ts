import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SponsorDetailComponent } from '../sponsor/sponsor-detail/sponsor-detail.component';
import { SponsorListComponent } from '../sponsor/sponsor-list/sponsor-list.component';
import { SponsorCreateComponent } from '../sponsor/sponsor-create/sponsor-create.component';

const routes: Routes = [{
  path: 'sponsors',
  children: [
    {
      path: 'create',
      component: SponsorCreateComponent
    },
    {
      path: 'list',
      component: SponsorListComponent
    },
    {
      path: ':id',
      component: SponsorDetailComponent
    },
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SponsorRoutingModule { }
