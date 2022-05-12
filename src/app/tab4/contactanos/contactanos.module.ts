import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

import { ContactanosPageRoutingModule } from './contactanos-routing.module';

import { ContactanosPage } from './contactanos.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactanosPageRoutingModule,
  ],
  declarations: [ContactanosPage],
  providers: [
    CallNumber
  ]
})
export class ContactanosPageModule {}
