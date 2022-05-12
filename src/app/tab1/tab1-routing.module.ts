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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
