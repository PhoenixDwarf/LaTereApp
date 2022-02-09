import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrochetasPage } from './brochetas.page';

const routes: Routes = [
  {
    path: '',
    component: BrochetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrochetasPageRoutingModule {}
