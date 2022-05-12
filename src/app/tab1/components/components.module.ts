import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorteDelDiaComponent } from './corte-del-dia/corte-del-dia.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { SwiperComponent } from './swiper/swiper.component';



@NgModule({

  imports: [
    CommonModule,
  ],

  declarations: [
    ShowHidePasswordComponent,
  ],
  
  exports: [
    ShowHidePasswordComponent,
  ]

})

export class ComponentsModule { }
