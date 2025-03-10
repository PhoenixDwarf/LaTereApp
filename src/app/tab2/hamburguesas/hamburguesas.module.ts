import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HamburguesasPageRoutingModule } from './hamburguesas-routing.module';

import { HamburguesasPage } from './hamburguesas.page';
import { ListHamburguesasComponent } from '../components/list-hamburguesas/list-hamburguesas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HamburguesasPageRoutingModule
  ],
  declarations: [HamburguesasPage,ListHamburguesasComponent]
})
export class HamburguesasPageModule {}
