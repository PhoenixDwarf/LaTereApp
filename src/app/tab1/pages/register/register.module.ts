import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { ShowHidePasswordComponent } from '../../components/show-hide-password/show-hide-password.component';
import { ConfirmEqualValidatorDirective } from '../confirm-equal-validator.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPage,ShowHidePasswordComponent,ConfirmEqualValidatorDirective]
})
export class RegisterPageModule {}
