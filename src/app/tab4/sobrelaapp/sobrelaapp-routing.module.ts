import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrelaappPage } from './sobrelaapp.page';

const routes: Routes = [
  {
    path: '',
    component: SobrelaappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrelaappPageRoutingModule {}
