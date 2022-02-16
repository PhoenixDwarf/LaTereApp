import { Component} from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-cocteles',
  templateUrl: './list-cocteles.component.html',
  styleUrls: ['./list-cocteles.component.scss'],
})
export class ListCoctelesComponent {

  list:list[] = [
    {
      name: 'Martini',
      url: '',
      ingredientes:['- Ginebra','- Martini','- Aceituna','- Hielo']
    },

    {
      name: 'Cuba libre',
      url: '',
      ingredientes:['- Ron Negro','- Coca Cola','- Gotas de Limón','- Gotas Amargas','- Hielo']
    },

    {
      name: 'Margarita',
      url: '',
      ingredientes:['- Tequila Blanco','- Sumo de Limón','- Hielo']
    },

    {
      name: 'Margarita La Tere',
      url: '',
      ingredientes:['- Tequila Blanco','- Sumo de Naranja y Limón','- Hielo']
    },

    {
      name: 'Piña Colada',
      url: '',
      ingredientes:['- Ron','- Jugo de Piña','- Crema de Coco','- Hielo']
    },

    {
      name: 'Mojito',
      url: '',
      ingredientes:['- Ron Blanco','- Hierbabuena','- Soda','- Azucar','- Zumo de Limón','- Hielo']
    },

    {
      name: 'Daiquiri',
      url: '',
      ingredientes:['- Ron','- Zumo de Limón','- Azucar']
    },

    {
      name: 'Tom Collins',
      url: '',
      ingredientes:['- Ginebra','- Jugo de Limón','- Estevia','- Soda']
    },

    {
      name: 'Manhattan',
      url: '',
      ingredientes:['- Whiskey','- Vermouth Rojo','- Hielo']
    },

   
  ];


}
