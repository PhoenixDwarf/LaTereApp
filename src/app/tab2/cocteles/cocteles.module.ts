import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoctelesPageRoutingModule } from './cocteles-routing.module';

import { CoctelesPage } from './cocteles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoctelesPageRoutingModule
  ],
  declarations: [CoctelesPage]
})
export class CoctelesPageModule {}
