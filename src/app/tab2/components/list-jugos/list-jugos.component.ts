import { Component} from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-jugos',
  templateUrl: './list-jugos.component.html',
  styleUrls: ['./list-jugos.component.scss'],
})
export class ListJugosComponent {

  list:list[] = [
    {
      name: 'Piña con hierbabuena',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Feijoa , Flor de Jamaica, Jengibre',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Fresa con Naranja',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Fresa con Maracuya',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Limonada Natural',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Limonada Cerezada',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Limonada de Fresa',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Jarra de Limonada',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Malteadas',
      url: '',
      ingredientes:['']
    }
  ];


  list2:list[] = [
    {
      name: 'Frutos del Bosque',
      url: '',
      ingredientes:['- Fresa','- Arandanos','- Mora','- Frambuesa','- Yogurt Natural']
    },

    {
      name: 'Mango, Banano y Yogurt',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Mango y Banano',
      url: '',
      ingredientes:['']
    }
  ];

  list3:list[]=[
    {
      name: 'Maracuya',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Fresa',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Guanabana',
      url: '',
      ingredientes:['']
    },
  ];


  list4:list[]=[
    {
      name: 'Maracuya',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Fresa',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Mango',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Guanabana',
      url: '',
      ingredientes:['']
    }
    
  ];
}
