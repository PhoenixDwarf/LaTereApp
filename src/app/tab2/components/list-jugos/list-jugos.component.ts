import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OrdersService } from 'src/app/services/orders.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Order } from 'src/app/tab3/interfaces';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-jugos',
  templateUrl: './list-jugos.component.html',
  styleUrls: ['./list-jugos.component.scss'],
})
export class ListJugosComponent {

  constructor(
    private UserInteractionService: UserInteractionService,
    public alertController: AlertController,
    private OrdersService: OrdersService
  ) 
  {

  }

  list:list[] = [
    {
      name: 'Jugo Piña con hierbabuena',
      ingredientes:['- Personal'],
      price: 6000
    },

    {
      name: 'Jugo Feijoa , Flor de Jamaica, Jengibre',
      ingredientes:['- Personal'],
      price: 6000
    },

    {
      name: 'Jugo Fresa con Naranja',
      ingredientes:['- Personal'],
      price: 6000
    },

    {
      name: 'Jugo Fresa con Maracuya',
      ingredientes:['- Personal'],
      price: 6000
    },

    {
      name: 'Jugo Limonada Natural',
      ingredientes:['- Personal'],
      price: 4500
    },

    {
      name: 'Jugo Limonada Cerezada',
      ingredientes:['- Personal'],
      price: 6000
    },

    {
      name: 'Jugo Limonada de Fresa',
      ingredientes:['- Personal'],
      price: 6000
    },

    {
      name: 'Jugo Malteadas',
      ingredientes:['- Personal'],
      price: 8000
    }
  ];


  list2:list[] = [
    {
      name: 'Frutos del Bosque',
      ingredientes:['- Fresa','- Arandanos','- Mora','- Frambuesa','- Yogurt Natural'],
      price: 8000
    },

    {
      name: 'Mango, Banano y Yogurt',
      ingredientes:['- Personal'],
      price: 8000
    },

    {
      name: 'Mango y Banano',
      ingredientes:['- Personal'],
      price: 8000
    }
  ];

  list3:list[]=[
    {
      name: 'Jugo en leche Maracuya',
      ingredientes:['- Personal'],
      price: 5500
    },

    {
      name: 'Jugo en leche Fresa',
      ingredientes:['- Personal'],
      price: 5500
    },

    {
      name: 'Jugo en leche Guanabana',
      ingredientes:['- Personal'],
      price: 5500
    },
  ];


  list4:list[]=[
    {
      name: 'Jugo en agua Maracuya',
      ingredientes:['- Personal'],
      price: 4000
    },

    {
      name: 'Jugo en agua Fresa',
      ingredientes:['- Personal'],
      price: 4000
    },

    {
      name: 'Jugo en agua Mango',
      ingredientes:['- Personal'],
      price: 4000
    },

    {
      name: 'Jugo en agua Guanabana',
      ingredientes:['- Personal'],
      price: 4000
    }
    
  ];


  // Alert inputs //

  async onzas( id:number) {
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

  async leche( id:number) {
    let order: Order;
    const name: string = this.list3[id].name;
    const price: number = this.list3[id].price;
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

  async agua( id:number) {
    let order: Order;
    const name: string = this.list4[id].name;
    const price: number = this.list4[id].price;
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

  showAlert( id:number ){
    const name = this.list2[id].name;
    this.presentAlertError(name);
  }

  async presentAlertError(name: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Disfrútalo presencialmente`,
      subHeader: '¡Ups!',
      message: `Por motivos de calidad, nuestro Smoothie <strong> ${name} </strong> está disponible únicamente en nuestro local.`,
      buttons: ['OK']
    });
    await alert.present();
  }

}


