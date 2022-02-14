import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MordiscosPageRoutingModule } from './mordiscos-routing.module';

import { MordiscosPage } from './mordiscos.page';
import { ListMordiscosComponent } from '../components/list-mordiscos/list-mordiscos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MordiscosPageRoutingModule
  ],
  declarations: [MordiscosPage,ListMordiscosComponent]
})
export class MordiscosPageModule {}
