import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tab4Page } from './tab4.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4Page
  },
  {
    path: 'quienessomos',
    loadChildren: () => import('./quienessomos/quienessomos.module').then( m => m.QuienessomosPageModule)
  },
  {
    path: 'ubicanos',
    loadChildren: () => import('./ubicanos/ubicanos.module').then( m => m.UbicanosPageModule)
  },
  {
    path: 'stickers',
    loadChildren: () => import('./stickers/stickers.module').then( m => m.StickersPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./contactanos/contactanos.module').then( m => m.ContactanosPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'sobrelaapp',
    loadChildren: () => import('./sobrelaapp/sobrelaapp.module').then( m => m.SobrelaappPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
