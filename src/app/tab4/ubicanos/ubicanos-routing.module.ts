import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicanosPage } from './ubicanos.page';

const routes: Routes = [
  {
    path: '',
    component: UbicanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicanosPageRoutingModule {}
