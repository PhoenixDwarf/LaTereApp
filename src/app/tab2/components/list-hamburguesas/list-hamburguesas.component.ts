import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OrdersService } from 'src/app/services/orders.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Order } from 'src/app/tab3/interfaces';
import { list } from '../../interfaces/tab2.interface';


@Component({
  selector: 'app-list-hamburguesas',
  templateUrl: './list-hamburguesas.component.html',
  styleUrls: ['./list-hamburguesas.component.scss'],
})
export class ListHamburguesasComponent {

  constructor(
    private UserInteractionService: UserInteractionService,
    public alertController: AlertController,
    private OrdersService: OrdersService
  ) {

  }
  list: list[] = [
    {
      name: 'Tere Master Burguer',
      ingredientes: ['- Carne de Res 125g', '- Carne Desmechada', '- Cebolla Encurtida', '- Queso Americano', '- Lechuga Fresca', '- Alioli'],
      price: 15900,
    },

    {
      name: 'Cheese Burguer',
      ingredientes: ['- Carne de Res 125g', '- Queso Cheddar', '- Pepinillos', '- Lechuga Fresca', '- Tomate', '- Cebolla', '- Alioli'],
      price: 13900,
    },

    {
      name: 'Bacon Cheese Burguer',
      ingredientes: ['- Carne de Res 125g', '- Tocineta', '- Queso Cheddar', '- Pepinillos', '- Lechuga Fresca', '- Tomate', '- Cebolla', '- Alioli'],
      price: 14900,
    },

    {
      name: 'California Burguer',
      ingredientes: ['- Carne de Res 125g', '- Guacamole Fresco', '- Queso Mozzarella', '- Tocineta', '- Alioli'],
      price: 13900,
    },

    {
      name: 'BBQ Burguer',
      ingredientes: ['- Carne de Res 125g', '- Salsa BBQ (Dulce o Picante)', '- Queso Mozzarella', '- Pepinillos', '- Cebolla Frita', '- Alioli'],
      price: 15000,
    },

    {
      name: 'Classic Burguer',
      ingredientes: ['- Carne de Res 125g', '- Queso Cheddar', '- Lechuga Fresca', '- Cebolla Encurtida', '- Tomate',],
      price: 9900,
    },

    {
      name: 'Big Master Burguer',
      ingredientes: ['- Carne de Res 250g', '- Cebolla Encurtida', '- Queso Americano', '- Lechuga Fresca', '- Alioli'],
      price: 18500,
    },

  ];

  async hamburguers(id: number) {
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
