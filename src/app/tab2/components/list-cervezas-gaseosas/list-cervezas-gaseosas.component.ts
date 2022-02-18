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
      ingredientes:['']
    },

    {
      name: 'Club Colombia',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Corona',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Smirnoff',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Stella Artois',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Coronita',
      url: '',
      ingredientes:['']
    },

    {
      name: 'BBC',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Redd’s',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Budweiser',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Jarra de Refajo',
      url: '',
      ingredientes:['']
    },
    
  ];

  list2:list[]=[
    {
      name: 'Gaseosa 350',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Gaseosa friopack',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Gaseosa friopack',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Gaseosa 1,5 litros',
      url: '',
      ingredientes:['']
    },

    
  ]
  list3:list[]=[

    {
      name: 'Jugo en caja',
      url: '',
      ingredientes:['']
    },

    {
      name: 'Agua botella',
      url: '',
      ingredientes:['']
    }

  ]

}
