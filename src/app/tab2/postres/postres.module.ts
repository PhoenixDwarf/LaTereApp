import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostresPageRoutingModule } from './postres-routing.module';

import { PostresPage } from './postres.page';
import { ListPostresComponent } from '../components/list-postres/list-postres.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostresPageRoutingModule
  ],
  declarations: [PostresPage,ListPostresComponent]
})
export class PostresPageModule {}
