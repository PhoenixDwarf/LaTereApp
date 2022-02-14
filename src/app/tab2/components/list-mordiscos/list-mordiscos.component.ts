import { Component } from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-mordiscos',
  templateUrl: './list-mordiscos.component.html',
  styleUrls: ['./list-mordiscos.component.scss'],
})
export class ListMordiscosComponent{

  list:list[] = [
    {
      name: 'Patacón en Salsa de Guacamole',
      url: '',
      ingredientes:['- 2 Patacones','- Guacamole','- Chips de Papas','- Queso Americano','- Alioli']
    },

    {
      name: 'Tabla de Papa Criolla y Chorizos',
      url: '',
      ingredientes:['- Papa Criolla en Alioli de Tomates Secos','- Chorizo','- Longaniza'] 
    },

    {
      name: 'Mini Empanadas',
      url: '',
      ingredientes:['- 3 Mini Empanadas Acompañas de Alioli'] 
    },

    {
      name: 'Papas Chicharrón',
      url: '',
      ingredientes:['- Papas en Casco','- Salsa de Queso','- Bites de Chicharrón'] 
    },
    
  ];


  list2:list[] = [
    {
      name: 'La niña de Tere',
      url: '',
      ingredientes:['- Carne de Res Desmechada','- Piña en Trozos']
    },

    {
      name: 'La Sobrina',
      url: '',
      ingredientes:['- Pollo Desmechado'] 
    },

    {
      name: 'La Nana de Tere',
      url: '',
      ingredientes:['- Carne de Res Desmechada'] 
    },

    {
      name: 'La Señora Tere',
      url: '',
      ingredientes:['- Carne de Res Desmechada','- Pollo Desmechado'] 
    },
    
  ];

}
