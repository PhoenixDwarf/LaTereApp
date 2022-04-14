import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SwiperModule } from 'swiper/angular';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { SwiperComponent } from './components/swiper/swiper.component';
import { CorteDelDiaComponent } from './components/corte-del-dia/corte-del-dia.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SwiperModule
  ],
  declarations: [Tab1Page,SwiperComponent,CorteDelDiaComponent,RedesSocialesComponent]
})
export class Tab1PageModule {}
