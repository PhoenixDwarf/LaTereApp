import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PataconesPage } from './patacones.page';

const routes: Routes = [
  {
    path: '',
    component: PataconesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PataconesPageRoutingModule {}
