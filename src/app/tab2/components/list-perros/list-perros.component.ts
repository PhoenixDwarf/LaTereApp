import { Component } from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-perros',
  templateUrl: './list-perros.component.html',
  styleUrls: ['./list-perros.component.scss'],
})
export class ListPerrosComponent {


  list:list[] = [
    {
      name: 'Queso hierbas',
      url: '',
      ingredientes:['- Cerdo','- Tomates Parrillados','- Queso Mozzarella','- Albahaca']
    },

    {
      name: 'Pollo Miel',
      url: '',
      ingredientes:['- Pollo','- Guacamole','- Alioli Picante'] 
    },

    {
      name: 'Chilli Cheese Dog',
      url: '',
      ingredientes:['- Res','- Cerdo','- Chili de Carne','- Queso Cheddar','- Suero','- Jalapeños'] 
    },

    {
      name: 'Bratwurtst',
      url: '',
      ingredientes:['- Cerdo','- Chucrut','- Mostaza','- Salsa Mil Teres'] 
    }
    
  ];
}
