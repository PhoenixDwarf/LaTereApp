import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpassPageRoutingModule } from './forgotpass-routing.module';

import { ForgotpassPage } from './forgotpass.page';
import { ComponentsModule } from '../../components/components.module';
import { PagesModule } from '../pages.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotpassPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    PagesModule
  ],
  declarations: [ForgotpassPage]
})
export class ForgotpassPageModule {}
