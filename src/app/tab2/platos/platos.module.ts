import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatosPageRoutingModule } from './platos-routing.module';

import { PlatosPage } from './platos.page';
import { ListPlatosComponent } from '../components/list-platos/list-platos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatosPageRoutingModule
  ],
  declarations: [PlatosPage,ListPlatosComponent]
})
export class PlatosPageModule {}
