import { Component } from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-platos',
  templateUrl: './list-platos.component.html',
  styleUrls: ['./list-platos.component.scss'],
})
export class ListPlatosComponent {

  list:list[] = [
    {
      name: 'Lomo de Res Tere (300 grs)',
      url: '',
      ingredientes:['- Mantequilla de Tocineta','- Hierbas']
    },

    {
      name: 'Chata de res Tere (300 grs)',
      url: '',
      ingredientes:['Ahumada y a la parrilla con chimichurri y salsa de la casa'] 
    },

    {
      name: 'Pechuga de Pollo',
      url: '',
      ingredientes:['A la parrilla o gratinada'] 
    },

    {
      name: 'Costilla de Cerdo BBQ (400 g)',
      url: '',
      ingredientes:['Ahumadas, y a la parrilla con salsa BBQ dulce o picante de la casa'] 
    },

    {
      name: 'Chuleta Valluna (300 g)',
      url: '',
      ingredientes:['Lomo de cerdo empanizado con especias de la casa'] 
    },

    {
      name: 'Corte de Temporada (350g)',
      url: '',
      ingredientes:['A la parrilla (selección del día)'] 
    },

    {
      name: 'Mojarra de la Casa (600g)',
      url: '',
      ingredientes:['Pesca del vecino empanizada con especias de la casa'] 
    },

    {
      name: 'Trucha Tere (400g)',
      url: '',
      ingredientes:['Pesca del lago, a la parrilla, al ajillo'] 
    },

    {
      name: 'Parrillada de Doña Tere',
      url: '',
      ingredientes:['- Papa criolla','- Pechuga de Pollo','- Ternera Ahumada','- Chorizo','- Longaniza','- Alioli de Aguacate'] 
    },

    {
      name: 'Lomo de Cerdo',
      url: '',
      ingredientes:['Mantequilla de tocineta y hierbas'] 
    },
    
  ];

}
