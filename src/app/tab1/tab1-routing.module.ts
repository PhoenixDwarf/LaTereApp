import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { UbicanosPage } from '../tab4/ubicanos/ubicanos.page';
import { PlatosPage } from '../tab2/platos/platos.page';
import { PrivacidadPageModule } from '../tab4/privacidad/privacidad.module';

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
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
