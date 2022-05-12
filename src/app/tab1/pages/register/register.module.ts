import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { ConfirmEqualValidatorDirective } from '../confirm-equal-validator.directive';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [RegisterPage,ConfirmEqualValidatorDirective]
})
export class RegisterPageModule {}
