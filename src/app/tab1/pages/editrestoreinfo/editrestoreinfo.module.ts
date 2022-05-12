import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditrestoreinfoPageRoutingModule } from './editrestoreinfo-routing.module';

import { EditrestoreinfoPage } from './editrestoreinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditrestoreinfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditrestoreinfoPage]
})
export class EditrestoreinfoPageModule {}
