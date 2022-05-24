import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OrdersService } from 'src/app/services/orders.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Order } from 'src/app/tab3/interfaces';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-platos',
  templateUrl: './list-platos.component.html',
  styleUrls: ['./list-platos.component.scss'],
})
export class ListPlatosComponent {

  constructor(
    private UserInteractionService: UserInteractionService,
    public alertController: AlertController,
    private OrdersService: OrdersService
  ) 
  {

  }

  list:list[] = [
    {
      name: 'Lomo de Res Tere (300 grs)',
      ingredientes:['- Mantequilla de Tocineta','- Hierbas'],
      price: 23000
    },

    {
      name: 'Chata de res Tere (300 grs)',
      ingredientes:['Ahumada y a la parrilla con chimichurri y salsa de la casa'],
      price: 22500
    },

    {
      name: 'Pechuga de Pollo',
      ingredientes:['A la parrilla o gratinada'],
      price: 21500
    },

    {
      name: 'Costilla de Cerdo BBQ (400 g)',
      ingredientes:['Ahumadas, y a la parrilla con salsa BBQ dulce o picante de la casa'],
      price: 24000
    },

    {
      name: 'Chuleta Valluna (300 g)',
      ingredientes:['Lomo de cerdo empanizado con especias de la casa'],
      price: 23000
    },

    {
      name: 'Corte de Temporada (350g)',
      ingredientes:['A la parrilla (selección del día)'],
      price: 30000
    },

    {
      name: 'Mojarra de la Casa (600g)',
      ingredientes:['Pesca del vecino empanizada con especias de la casa'],
      price: 24000
    },

    {
      name: 'Trucha Tere (400g)',
      ingredientes:['Pesca del lago, a la parrilla, al ajillo'],
      price: 25000
    },

    {
      name: 'Parrillada de Doña Tere',
      ingredientes:['- Papa criolla','- Pechuga de Pollo','- Ternera Ahumada','- Chorizo','- Longaniza','- Alioli de Aguacate'],
      price: 25000
    },

    {
      name: 'Lomo de Cerdo',
      ingredientes:['Mantequilla de tocineta y hierbas'],
      price: 24000
    },
    
  ];

  async platos( id:number) {
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

}
