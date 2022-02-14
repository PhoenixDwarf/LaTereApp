import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CervezasygaseosasPageRoutingModule } from './cervezasygaseosas-routing.module';

import { CervezasygaseosasPage } from './cervezasygaseosas.page';
import { ListCervezasGaseosasComponent } from '../components/list-cervezas-gaseosas/list-cervezas-gaseosas.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CervezasygaseosasPageRoutingModule
  ],
  declarations: [CervezasygaseosasPage,ListCervezasGaseosasComponent]
})
export class CervezasygaseosasPageModule {}
