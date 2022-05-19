import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicanosPageRoutingModule } from './ubicanos-routing.module';

import { UbicanosPage } from './ubicanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicanosPageRoutingModule,
  ],
  declarations: [UbicanosPage]
})
export class UbicanosPageModule {}
