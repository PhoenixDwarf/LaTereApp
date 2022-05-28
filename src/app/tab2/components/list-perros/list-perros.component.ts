import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OrdersService } from 'src/app/services/orders.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Order } from 'src/app/tab3/interfaces';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-perros',
  templateUrl: './list-perros.component.html',
  styleUrls: ['./list-perros.component.scss'],
})
export class ListPerrosComponent {

  constructor(
    private UserInteractionService: UserInteractionService,
    public alertController: AlertController,
    private OrdersService: OrdersService
  ) {
  }

  list: list[] = [
    {
      name: 'Perro Queso hierbas',
      ingredientes: ['- Cerdo', '- Tomates Parrillados', '- Queso Mozzarella', '- Albahaca'],
      price: 11000,
    },

    {
      name: 'Perro Pollo Miel',
      ingredientes: ['- Pollo', '- Guacamole', '- Alioli Picante'],
      price: 10500,
    },

    {
      name: 'Perro Chilli Cheese Dog',
      ingredientes: ['- Res', '- Cerdo', '- Chili de Carne', '- Queso Cheddar', '- Suero', '- Jalapeños'],
      price: 14000,
    },

    {
      name: 'Perro Bratwurtst',
      ingredientes: ['- Cerdo', '- Chucrut', '- Mostaza', '- Salsa Mil Teres'],
      price: 12000,
    }

  ];

  async perros(id: number) {
    if (localStorage.getItem('PendingOrder') == 'true') {
      this.thereIsOrder();
    } else {
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
                options: ['', '', '']
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
  async thereIsOrder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `No se puede agregar el producto al pedido.`,
      subHeader: '¡Ups!',
      message: 'Parece que ya tienes un pedido confirmado. Si deseas realizar un cambio en tu pedido de último momento, por favor comunícate con nosotros a nuestra línea telefónica.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
