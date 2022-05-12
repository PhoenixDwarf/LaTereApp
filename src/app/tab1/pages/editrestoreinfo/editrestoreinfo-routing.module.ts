import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditrestoreinfoPage } from './editrestoreinfo.page';

const routes: Routes = [
  {
    path: '',
    component: EditrestoreinfoPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class EditrestoreinfoPageRoutingModule {}
