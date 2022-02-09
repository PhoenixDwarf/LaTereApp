import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugosPage } from './jugos.page';

const routes: Routes = [
  {
    path: '',
    component: JugosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugosPageRoutingModule {}
