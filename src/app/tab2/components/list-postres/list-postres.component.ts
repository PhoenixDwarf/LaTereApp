import { Component } from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-postres',
  templateUrl: './list-postres.component.html',
  styleUrls: ['./list-postres.component.scss'],
})
export class ListPostresComponent {


  list:list[] = [
    {
      name: 'Brownie Nana con Helado de Vainilla',
      url: '',
      ingredientes:['- Torta de Chocolate','- Helado']
    },

    {
      name: 'Nana Apple Crips con Helado',
      url: '',
      ingredientes:['- Cumbre de Galletas','- Frutos Secos','- Helado de Vainilla']
    },

    {
      name: 'Chocolate de Tere',
      url: '',
      ingredientes:['- Mini Sandwich de Galleta Rellena con Helado de Chocolate','- Ganache de Chocolate']
    },

    {
      name: 'TereButter Chipwich',
      url: '',
      ingredientes:['- Mini Sandwich de Galleta Rellena con Helado de Vainilla','- Mousse de Banano']
    },

  ];

}
