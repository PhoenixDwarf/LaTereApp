import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlitasPageRoutingModule } from './alitas-routing.module';

import { AlitasPage } from './alitas.page';
import { ListAlitasComponent } from '../components/list-alitas/list-alitas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlitasPageRoutingModule
  ],
  declarations: [AlitasPage,ListAlitasComponent]
})
export class AlitasPageModule {}
