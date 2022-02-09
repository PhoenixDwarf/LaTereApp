import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugosPageRoutingModule } from './jugos-routing.module';

import { JugosPage } from './jugos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugosPageRoutingModule
  ],
  declarations: [JugosPage]
})
export class JugosPageModule {}
