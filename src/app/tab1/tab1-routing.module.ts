import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { UbicanosPage } from '../tab4/ubicanos/ubicanos.page';

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
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'editrestoreinfo',
    loadChildren: () => import('./pages/editrestoreinfo/editrestoreinfo.module').then( m => m.EditrestoreinfoPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import('./pages/changepass/changepass.module').then( m => m.ChangepassPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./pages/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'help2',
    loadChildren: () => import('./pages/help2/help2.module').then( m => m.Help2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
