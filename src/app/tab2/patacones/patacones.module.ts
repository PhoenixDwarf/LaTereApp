import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PataconesPageRoutingModule } from './patacones-routing.module';

import { PataconesPage } from './patacones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PataconesPageRoutingModule
  ],
  declarations: [PataconesPage]
})
export class PataconesPageModule {}
