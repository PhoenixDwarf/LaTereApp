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
      name: '8 Piezas',
      url: '',
      ingredientes:['- BBQ Miel','- Buffalo','- Honey Master','- Jalapeño Master','- Thai Oriental']
    },

    {
      name: '16 Piezas',
      url: '',
      ingredientes:['- BBQ Miel','- Buffalo','- Honey Master','- Jalapeño Master','- Thai Oriental']
    },

    {
      name: '24 Piezas',
      url: '',
      ingredientes:['- BBQ Miel','- Buffalo','- Honey Master','- Jalapeño Master','- Thai Oriental']
    }
    
  ];

}
