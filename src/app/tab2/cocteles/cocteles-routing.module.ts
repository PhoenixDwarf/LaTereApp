import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoctelesPage } from './cocteles.page';

const routes: Routes = [
  {
    path: '',
    component: CoctelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoctelesPageRoutingModule {}
