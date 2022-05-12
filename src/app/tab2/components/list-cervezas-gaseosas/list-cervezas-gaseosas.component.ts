import { Component} from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-cervezas-gaseosas',
  templateUrl: './list-cervezas-gaseosas.component.html',
  styleUrls: ['./list-cervezas-gaseosas.component.scss'],
})
export class ListCervezasGaseosasComponent{

  list:list[] = [
    {
      name: 'Aguila',
      url: '',
      ingredientes:['- Original']
    },

    {
      name: 'Club Colombia',
      url: '',
      ingredientes:['- Personal']
    },

    {
      name: 'Corona',
      url: '',
      ingredientes:['- Personal']
    },

    {
      name: 'Smirnoff',
      url: '',
      ingredientes:['- Personal']
    },

    {
      name: 'Stella Artois',
      url: '',
      ingredientes:['- Personal']
    },

    {
      name: 'Coronita',
      url: '',
      ingredientes:['- Personal (210ml)']
    },

    {
      name: 'BBC',
      url: '',
      ingredientes:['- Honey Ale']
    },

    {
      name: 'Redd’s',
      url: '',
      ingredientes:['- Personal']
    },

    {
      name: 'Budweiser',
      url: '',
      ingredientes:['- En lata (330 ml)']
    },

    {
      name: 'Heineken',
      url: '',
      ingredientes:['- En lata (330 ml)']
    },
    
  ];

  list2:list[]=[
    {
      name: 'Gaseosa 350',
      url: '',
      ingredientes:['- Productos Postobón']
    },

    {
      name: 'Gaseosa friopack',
      url: '',
      ingredientes:['- Gran bretaña ','- Sprite ','- Coca cola','- Cuatro','- Canada dry']
    },

    {
      name: 'Gaseosa 1,5 litros',
      url: '',
      ingredientes:['- Productos Postobón']
    },

    
  ]
  list3:list[]=[

    {
      name: 'Jugo en caja (Hit)',
      url: '',
      ingredientes:['- Mango','- Mora','- Durazno','- Lulo']
    },

    {
      name: 'Agua botella',
      url: '',
      ingredientes:['- Sin gas','- Con gas']
    },

    {
      name: 'Hatsu',
      url: '',
      ingredientes:['- Blanco','- Rojo','- Amarillo','- Aguamarina']
    }

  ]

  list4:list[]=[
      {
        name: 'Jarra de Refajo',
        url: '',
        ingredientes:['- Para cinco personas']
      }
  ]

}
