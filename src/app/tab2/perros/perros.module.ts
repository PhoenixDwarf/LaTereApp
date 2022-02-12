import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerrosPageRoutingModule } from './perros-routing.module';

import { PerrosPage } from './perros.page';
import { ListPerrosComponent } from '../components/list-perros/list-perros.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerrosPageRoutingModule
  ],
  declarations: [PerrosPage,ListPerrosComponent]
})
export class PerrosPageModule {}
