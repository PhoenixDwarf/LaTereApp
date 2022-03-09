import { Component} from '@angular/core';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-alitas',
  templateUrl: './list-alitas.component.html',
  styleUrls: ['./list-alitas.component.scss'],
})
export class ListAlitasComponent {

  list:list[] = [
    {
      name: '8 Piezas (Una salsa)',
      url: '',
      ingredientes:['- BBQ Miel','- Buffalo','- Honey Master','- Jalapeño Master','- Thai Oriental']
    },

    {
      name: '16 Piezas (Dos salsas)',
      url: '',
      ingredientes:['- BBQ Miel','- Buffalo','- Honey Master','- Jalapeño Master','- Thai Oriental']
    },

    {
      name: '24 Piezas (Tres salsas)',
      url: '',
      ingredientes:['- BBQ Miel','- Buffalo','- Honey Master','- Jalapeño Master','- Thai Oriental']
    }
    
  ];

}
