import { Component} from '@angular/core';
import { list } from '../../interfaces/tab2.interface';


@Component({
  selector: 'app-list-hamburguesas',
  templateUrl: './list-hamburguesas.component.html',
  styleUrls: ['./list-hamburguesas.component.scss'],
})
export class ListHamburguesasComponent {

  list:list[] = [
    {
      name: 'Tere Master',
      url: '',
      ingredientes:['- Carne de Res 125g','- Carne Desmechada','- Cebolla Encurtida','- Queso Americano','- Lechuga Fresca','- Alioli']
    },

    {
      name: 'Cheeseburguer',
      url: '',
      ingredientes:['- Carne de Res 125g','- Queso Cheddar','- Pepinillos','- Lechuga Fresca','- Tomate','- Cebolla','- Alioli'] 
    },

    {
      name: 'Bacon Cheeseburguer',
      url: '',
      ingredientes:['- Carne de Res 125g','- Tocineta','- Queso Cheddar','- Pepinillos','- Lechuga Fresca','- Tomate','- Cebolla','- Alioli'] 
    },

    {
      name: 'California Burguer',
      url: '',
      ingredientes:['- Carne de Res 125g','- Guacamole Fresco','- Queso Mozzarella','- Tocineta','- Alioli'] 
    },

    {
      name: 'BBQ Burguer',
      url: '',
      ingredientes:['- Carne de Res 125g','- Salsa BBQ (Dulce o Picante)','- Queso Mozzarella','- Pepinillos','- Cebolla Frita','- Alioli'] 
    },

    {
      name: 'Classic Burguer',
      url: '',
      ingredientes:['- Carne de Res 125g','- Queso Cheddar','- Lechuga Fresca','- Cebolla Encurtida','- Tomate',] 
    },

    {
      name: 'Big Master',
      url: '',
      ingredientes:['- Carne de Res 250g','- Cebolla Encurtida','- Queso Americano','- Lechuga Fresca','- Alioli'] 
    },
    
  ];


}
