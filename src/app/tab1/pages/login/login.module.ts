import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { ShowHidePasswordComponent } from '../../components/show-hide-password/show-hide-password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage,ShowHidePasswordComponent]
})
export class LoginPageModule {}
