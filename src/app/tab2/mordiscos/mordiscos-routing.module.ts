import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MordiscosPage } from './mordiscos.page';

const routes: Routes = [
  {
    path: '',
    component: MordiscosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MordiscosPageRoutingModule {}
