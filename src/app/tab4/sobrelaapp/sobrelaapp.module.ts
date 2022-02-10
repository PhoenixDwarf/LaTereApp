import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobrelaappPageRoutingModule } from './sobrelaapp-routing.module';

import { SobrelaappPage } from './sobrelaapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobrelaappPageRoutingModule
  ],
  declarations: [SobrelaappPage]
})
export class SobrelaappPageModule {}
