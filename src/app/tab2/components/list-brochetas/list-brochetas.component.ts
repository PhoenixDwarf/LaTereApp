import { Component } from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-brochetas',
  templateUrl: './list-brochetas.component.html',
  styleUrls: ['./list-brochetas.component.scss'],
})
export class ListBrochetasComponent{

  list:list[] = [
    {
      name: 'El Niño de Tere',
      url: '',
      ingredientes:['- 1 Proteína (res, pollo o cerdo)']
    },

    {
      name: 'El Sobrino',
      url: '',
      ingredientes:['- 2 Proteínas (mixto)'] 
    },

    {
      name: 'El Tata de Tere',
      url: '',
      ingredientes:['- 3 Proteínas (mixto)'] 
    }
  ];

  list2:list[] = [
    {
      name: 'Tere Con Carne',
      url: '',
      ingredientes:['- Desmechada']
    },

    {
      name: 'Nana Tere',
      url: '',
      ingredientes:['- Pollo'] 
    },

    {
      name: 'Tata de Tere',
      url: '',
      ingredientes:['- Carne y Pollo'] 
    }
  ];

}
