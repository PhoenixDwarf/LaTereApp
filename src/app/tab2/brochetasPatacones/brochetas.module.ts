import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrochetasPageRoutingModule } from './brochetas-routing.module';

import { BrochetasPage } from './brochetas.page';
import { ListBrochetasComponent } from '../components/list-brochetas/list-brochetas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrochetasPageRoutingModule
  ],
  declarations: [BrochetasPage,ListBrochetasComponent]
})
export class BrochetasPageModule {}
