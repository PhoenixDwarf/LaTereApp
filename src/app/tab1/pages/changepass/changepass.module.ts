import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangepassPageRoutingModule } from './changepass-routing.module';

import { ChangepassPage } from './changepass.page';
import { ComponentsModule } from '../../components/components.module';
import { PagesModule } from '../pages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangepassPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    PagesModule
  ],
  declarations: [ChangepassPage]
})
export class ChangepassPageModule {}
