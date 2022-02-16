import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugosPageRoutingModule } from './jugos-routing.module';

import { JugosPage } from './jugos.page';
import { ListJugosComponent } from '../components/list-jugos/list-jugos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugosPageRoutingModule
  ],
  declarations: [JugosPage,ListJugosComponent]
})
export class JugosPageModule {}
