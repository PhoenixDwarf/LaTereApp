import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { ComponentsModule } from '../../components/components.module';
import { PagesModule } from '../pages.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    PagesModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
