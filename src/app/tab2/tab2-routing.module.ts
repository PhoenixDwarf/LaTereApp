import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'hamburguesas1',
    loadChildren: () => import('./hamburguesas/hamburguesas.module').then( m => m.HamburguesasPageModule)
  },
  {
    path: 'perros',
    loadChildren: () => import('./perros/perros.module').then( m => m.PerrosPageModule)
  },
  {
    path: 'platos',
    loadChildren: () => import('./platos/platos.module').then( m => m.PlatosPageModule)
  },
  {
    path: 'alitas',
    loadChildren: () => import('./alitas/alitas.module').then( m => m.AlitasPageModule)
  },
  {
    path: 'mordiscos',
    loadChildren: () => import('./mordiscos/mordiscos.module').then( m => m.MordiscosPageModule)
  },
  {
    path: 'brochetas',
    loadChildren: () => import('./brochetasPatacones/brochetas.module').then( m => m.BrochetasPageModule)
  },
  {
    path: 'cervezasygaseosas',
    loadChildren: () => import('./cervezasygaseosas/cervezasygaseosas.module').then( m => m.CervezasygaseosasPageModule)
  },
  {
    path: 'jugos',
    loadChildren: () => import('./jugos/jugos.module').then( m => m.JugosPageModule)
  },
  {
    path: 'cocteles',
    loadChildren: () => import('./cocteles/cocteles.module').then( m => m.CoctelesPageModule)
  },
  {
    path: 'postres',
    loadChildren: () => import('./postres/postres.module').then( m => m.PostresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
