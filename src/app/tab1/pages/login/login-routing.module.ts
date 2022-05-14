import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { EditprofilePage } from '../editprofile/editprofile.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'editprofile',
    loadChildren: () => import ('../editprofile/editprofile.module').then(m => m.EditprofilePageModule)
  },
  {
    path: 'editrestoreinfo',
    loadChildren: () => import ('../editrestoreinfo/editrestoreinfo.module').then(m => m.EditrestoreinfoPageModule)
  },
  {
    path: 'changepass',
    loadChildren: () => import ('../changepass/changepass.module').then(m => m.ChangepassPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
