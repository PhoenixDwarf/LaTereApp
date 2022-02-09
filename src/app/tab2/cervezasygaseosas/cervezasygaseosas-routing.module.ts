import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CervezasygaseosasPage } from './cervezasygaseosas.page';

const routes: Routes = [
  {
    path: '',
    component: CervezasygaseosasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CervezasygaseosasPageRoutingModule {}
