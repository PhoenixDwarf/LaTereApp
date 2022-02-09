import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CervezasygaseosasPageRoutingModule } from './cervezasygaseosas-routing.module';

import { CervezasygaseosasPage } from './cervezasygaseosas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CervezasygaseosasPageRoutingModule
  ],
  declarations: [CervezasygaseosasPage]
})
export class CervezasygaseosasPageModule {}
