import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OrdersService } from 'src/app/services/orders.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Order } from 'src/app/tab3/interfaces';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-mordiscos',
  templateUrl: './list-mordiscos.component.html',
  styleUrls: ['./list-mordiscos.component.scss'],
})
export class ListMordiscosComponent{

  constructor(
    private UserInteractionService: UserInteractionService,
    public alertController: AlertController,
    private OrdersService: OrdersService
  ) 
  {

  }

  list:list[] = [
    {
      name: 'Patacón en Salsa de Guacamole',
      ingredientes:['- 2 Patacones','- Guacamole','- Chips de Papas','- Queso Americano','- Alioli'],
      price: 9000
    },

    {
      name: 'Tabla de Papa Criolla y Chorizos',
      ingredientes:['- Papa Criolla en Alioli de Tomates Secos','- Chorizo','- Longaniza'],
      price: 11000
    },

    {
      name: 'Mini Empanadas',
      ingredientes:['- 3 Mini Empanadas Acompañas de Alioli'],
      price: 9000
    },

    {
      name: 'Papas Chicharrón',
      ingredientes:['- Papas en Casco','- Salsa de Queso','- Bites de Chicharrón'],
      price: 10000
    },
    
  ];


  list2:list[] = [
    {
      name: 'Mazorcada La Niña de Tere',
      ingredientes:['- Carne de Res Desmechada','- Piña en Trozos'],
      price: 17000
    },

    {
      name: 'Mazorcada La Sobrina de Tere',
      ingredientes:['- Pollo Desmechado'],
      price: 16000
    },

    {
      name: 'Mazorcada La Nana de Tere',
      ingredientes:['- Carne de Res Desmechada'],
      price: 16500
    },

    {
      name: 'Mazorcada La Señora Tere',
      ingredientes:['- Carne de Res Desmechada','- Pollo Desmechado'],
      price: 17000
    },
    
  ];

  async mordiscos( id:number) {
    let order: Order;
    const name: string = this.list[id].name;
    const price: number = this.list[id].price;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class AlitasAlert',
      header: `¿Agregar ${name} al pedido?`,
      message: ``,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
          }
        },
        {
          text: 'Agregar',
          id: 'confirm-button',
          handler: () => {
              order = {
                name: name,
                price: price,
              };
              this.OrdersService.newOrder$.emit(order);
              this.UserInteractionService.presentToast(`¡Se ha agregado ${name} al pedido con éxito!`);
          }
        }
      ],
    });

    await alert.present();
  }

  async mazorcadas( id:number) {  
    let order: Order;
    const name: string = this.list2[id].name;
    const price: number = this.list2[id].price;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class AlitasAlert',
      header: `¿Agregar ${name} al pedido?`,
      message: ``,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
          }
        },
        {
          text: 'Agregar',
          id: 'confirm-button',
          handler: () => {
              order = {
                name: name,
                price: price,
              };
              this.OrdersService.newOrder$.emit(order);
              this.UserInteractionService.presentToast(`¡Se ha agregado ${name} al pedido con éxito!`);
          }
        }
      ],
    });

    await alert.present();
  }

}
