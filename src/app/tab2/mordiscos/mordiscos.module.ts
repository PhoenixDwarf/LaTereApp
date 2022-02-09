import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MordiscosPageRoutingModule } from './mordiscos-routing.module';

import { MordiscosPage } from './mordiscos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MordiscosPageRoutingModule
  ],
  declarations: [MordiscosPage]
})
export class MordiscosPageModule {}
