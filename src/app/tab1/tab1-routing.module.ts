import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { UbicanosPage } from '../tab4/ubicanos/ubicanos.page';
import { PlatosPage } from '../tab2/platos/platos.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path:'ubicanos',
    component: UbicanosPage,
  },
  {
    path:'alacarta',
    component: PlatosPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
