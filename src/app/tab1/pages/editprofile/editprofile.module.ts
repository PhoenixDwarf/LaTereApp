import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprofilePageRoutingModule } from './editprofile-routing.module';
import { EditprofilePage } from './editprofile.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditprofilePageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [EditprofilePage]
})
export class EditprofilePageModule {}
