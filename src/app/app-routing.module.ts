import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./tab1/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./tab1/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./tab1/pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'help2',
    loadChildren: () => import('./tab1/pages/help2/help2.module').then( m => m.Help2PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
