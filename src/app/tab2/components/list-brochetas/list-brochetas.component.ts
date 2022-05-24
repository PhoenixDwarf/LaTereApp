import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OrdersService } from 'src/app/services/orders.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Order } from 'src/app/tab3/interfaces';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-brochetas',
  templateUrl: './list-brochetas.component.html',
  styleUrls: ['./list-brochetas.component.scss'],
})
export class ListBrochetasComponent {

  array2proteins: string[] = [];

  array3proteins: string[] = [];


  constructor(
    private UserInteractionService: UserInteractionService,
    public alertController: AlertController,
    private OrdersService: OrdersService
  ) {

  }

  //LISTS//

  list: list[] = [
    {
      name: 'Brocheta El Niño de Tere',
      ingredientes: ['- 1 Proteína (res, pollo o cerdo)'],
      price: 17000
    },

    {
      name: 'Brocheta El Sobrino',
      ingredientes: ['- 2 Proteínas (mixto)'],
      price: 17500
    },

    {
      name: 'Brocheta El Tata de Tere',
      ingredientes: ['- 3 Proteínas (mixto)'],
      price: 18000
    }
  ];

  list2: list[] = [
    {
      name: 'Patacon Tere Con Carne',
      ingredientes: ['- Desmechada'],
      price: 21000
    },

    {
      name: 'Patacon Nana Tere',
      ingredientes: ['- Pollo'],
      price: 20500
    },

    {
      name: 'Patacon Tata de Tere',
      ingredientes: ['- Carne y Pollo'],
      price: 21500
    }
  ];

  // FUNCTIONS //

  mainFunction(identifier: number) {
    if (identifier == 0) {
      this.oneOption();
    }
    else if (identifier == 1) {
      this.twoOptions();
    }
    else {
      this.threeOptions();
    }
  }

  async oneOption() {
    let order: Order;
    const name: string = this.list[0].name;
    const price: number = this.list[0].price;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class AlitasAlert',
      header: `¿Agregar ${name} al pedido?`,
      message: `Por favor selecciona la proteína deseas.`,
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '- Res',
          value: 'Res',
          handler: () => {
          },
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '- Pollo',
          value: 'Pollo',
          handler: () => {
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '- Cerdo',
          value: 'Cerdo',
          handler: () => {
          }
        }
      ],
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
          handler: (res) => {
            if (res !== undefined) {
              order = {
                name: name,
                price: price,
                options: res
              };
              this.OrdersService.newOrder$.emit(order);
              this.UserInteractionService.presentToast(`¡Se ha agregado ${name} al pedido con éxito!`);
            }
            else {
              this.presentAlertError(name);
            }
          }
        }
      ],
    });

    await alert.present();
  }

  async twoOptions(index?: number) {
    let counter = index | 0;
    let order: Order;
    let message: string = '';

    if (counter == 0) {
      message = `Por favor selecciona la <strong> primera </strong> proteína deseas en tu brocheta.`;
    } else {
      message = `Por favor selecciona la <strong> segunda </strong> proteína deseas en tu brocheta.`;
    }

    const name: string = this.list[1].name;
    const price: number = this.list[1].price;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class AlitasAlert',
      header: `¿Agregar ${name} al pedido?`,
      message: message,
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '- Res',
          value: 'Res',
          handler: () => {
          },
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '- Pollo',
          value: 'Pollo',
          handler: () => {
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '- Cerdo',
          value: 'Cerdo',
          handler: () => {
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            this.array2proteins = [];
          }
        }, {
          text: 'Agregar',
          id: 'confirm-button',
          handler: (res: string) => {
            if (res !== undefined) {
              counter++;
              this.array2proteins.push(res);
              if (counter !== 2) {
                this.twoOptions(counter);
              }
              else {
                order = {
                  name: name,
                  price: price,
                  options: this.array2proteins
                };
                this.OrdersService.newOrder$.emit(order);
                this.array2proteins = [];
                this.UserInteractionService.presentToast(`¡Se ha agregado ${name} al pedido con éxito!`);
                // En lugar de hacer esto deberia llamar un servicio que envie este objeto a pedidos
              }
            }
            else {
              this.presentAlertError(name);
              this.array2proteins = [];
            }
          }
        }
      ],
    });

    await alert.present();
  }

  async threeOptions(index?: number) {
    let counter = index | 0;
    let order: Order;
    let message: string = '';

    if (counter == 0) {
      message = `Por favor selecciona la <strong> primera </strong> proteína deseas en tu brocheta.`;
    } else if (counter == 1) {
      message = `Por favor selecciona la <strong> segunda </strong> proteína deseas en tu brocheta.`;
    }
    else {
      message = `Por favor selecciona la <strong> tercera </strong> proteína deseas en tu brocheta.`;
    }

    const name: string = this.list[2].name;
    const price: number = this.list[2].price;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class AlitasAlert',
      header: `¿Agregar ${name} al pedido?`,
      message: message,
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '- Res',
          value: 'Res',
          handler: () => {
          },
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '- Pollo',
          value: 'Pollo',
          handler: () => {
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '- Cerdo',
          value: 'Cerdo',
          handler: () => {
          }
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            this.array3proteins = [];
          }
        }, {
          text: 'Agregar',
          id: 'confirm-button',
          handler: (res: string) => {
            if (res !== undefined) {
              counter++;
              this.array3proteins.push(res);
              if (counter !== 3) {
                this.threeOptions(counter);
              }
              else {
                order = {
                  name: name,
                  price: price,
                  options: this.array3proteins
                };
                this.OrdersService.newOrder$.emit(order);
                this.array3proteins = [];
                this.UserInteractionService.presentToast(`¡Se ha agregado ${name} al pedido con éxito!`);
                // En lugar de hacer esto deberia llamar un servicio que envie este objeto a pedidos
              }
            }
            else {
              this.presentAlertError(name);
              this.array3proteins = [];
            }
          }
        }
      ],
    });

    await alert.present();
  }

  async patacones(id: number) {

    let order: Order;
    const name:string = this.list2[id].name;
    const price:number = this.list2[id].price;
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
  // ERROR FUNCTIONS //

  async presentAlertError(name: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Agregar ${name} al pedido`,
      subHeader: '¡Ups!',
      message: 'Recuerda seleccionar una proteína.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
