import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { OrdersService } from 'src/app/services/orders.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Order } from 'src/app/tab3/interfaces';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-cervezas-gaseosas',
  templateUrl: './list-cervezas-gaseosas.component.html',
  styleUrls: ['./list-cervezas-gaseosas.component.scss'],
})
export class ListCervezasGaseosasComponent{

  constructor(
    private UserInteractionService: UserInteractionService,
    public alertController: AlertController,
    private OrdersService: OrdersService
  ) 
  {

  }

  list:list[] = [
    {
      name: 'Aguila',
      ingredientes:['- Original'],
      price: 4000
    },

    {
      name: 'Club Colombia',
      ingredientes:['- Personal'],
      price: 5000
    },

    {
      name: 'Corona',
      ingredientes:['- Personal'],
      price: 7000
    },

    {
      name: 'Smirnoff',
      ingredientes:['- Personal'],
      price: 10000
    },

    {
      name: 'Stella Artois',
      ingredientes:['- Personal'],
      price: 7000
    },

    {
      name: 'Coronita',
      ingredientes:['- Personal (210ml)'],
      price: 4500
    },

    {
      name: 'BBC',
      ingredientes:['- Honey Ale'],
      price: 7000
    },

    {
      name: 'Redd’s',
      ingredientes:['- Personal'],
      price: 5000
    },

    {
      name: 'Budweiser',
      ingredientes:['- En lata (330 ml)'],
      price: 3500
    },

    {
      name: 'Heineken',
      ingredientes:['- En lata (330 ml)'],
      price: 5000
    },
    
  ];

  list2:list[]=[
    {
      name: 'Gran bretaña',
      ingredientes:['- Personal'],
      price: 3000
    },
    {
      name: 'Sprite',
      ingredientes:['- Personal'],
      price: 3000
    }, 
    {
      name: 'Coca cola',
      ingredientes:['- Personal'],
      price: 3000
    }, 
    {
      name: 'Cuatro',
      ingredientes:['- Personal'],
      price: 3000
    }, 
    {
      name: 'Canada dry',
      ingredientes:['- Personal'],
      price: 3000
    },   
  ]
  list3:list[]=[

    {
      name: 'Jugo en caja (Hit)',
      ingredientes:['- Mango','- Mora','- Durazno','- Lulo'],
      price: 2000
    },

    {
      name: 'Agua botella',
      ingredientes:['- Sin gas','- Con gas'],
      price: 3000
    },

    {
      name: 'Hatsu',
      ingredientes:['- Blanco','- Rojo','- Amarillo','- Aguamarina'],
      price: 5000
    }

  ]

  jugosHit:{}[] = [
    {
      name: 'radio1',
      type: 'radio',
      label: '- Mango',
      value: ' Mango',
      handler: () => {
      },
    },
    {
      name: 'radio2',
      type: 'radio',
      label: '- Mora',
      value: ' Mora',
      handler: () => {
      }
    },
    {
      name: 'radio3',
      type: 'radio',
      label: '- Durazno',
      value: ' Durazno',
      handler: () => {
      }
    },
    {
      name: 'radio3',
      type: 'radio',
      label: '- Lulo',
      value: ' Lulo',
      handler: () => {
      }
    }
  ];
  hatsu:{}[] = [
    {
      name: 'radio1',
      type: 'radio',
      label: '- Blanco',
      value: ' Blanco',
      handler: () => {
      },
    },
    {
      name: 'radio2',
      type: 'radio',
      label: '- Rojo',
      value: ' Rojo',
      handler: () => {
      }
    },
    {
      name: 'radio3',
      type: 'radio',
      label: '- Amarillo',
      value: ' Amarillo',
      handler: () => {
      }
    },
    {
      name: 'radio3',
      type: 'radio',
      label: '- Aguamarina',
      value: ' Aguamarina',
      handler: () => {
      }
    }
  ];
  agua:{}[] = [
    {
      name: 'radio1',
      type: 'radio',
      label: '- Sin gas',
      value: ' Sin gas',
      handler: () => {
      },
    },
    {
      name: 'radio2',
      type: 'radio',
      label: '- Con gas',
      value: ' Con gas',
      handler: () => {
      }
    }
  ];
  

  // FUNCTIONS // 

  async cervezas( id:number) {
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

  async gaseosas( id:number) {
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

  async otros( id:number ) {
    let order: Order;
    const name: string = this.list3[id].name;
    const price: number = this.list3[id].price;
    if(id == 0){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class AlitasAlert',
        header: `¿Agregar ${name} al pedido?`,
        message: 'Por favor selecciona el sabor de tu bebida.',
        inputs: this.jugosHit,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: () => {
            }
          }, {
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
                  // En lugar de hacer esto deberia llamar un servicio que envie este objeto a pedidos
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
    else if (id == 1){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class AlitasAlert',
        header: `Agregar ${name} al pedido`,
        message: 'Por favor selecciona el tipo de agua que deseas.',
        inputs: this.agua,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: () => {
            }
          }, {
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
                  // En lugar de hacer esto deberia llamar un servicio que envie este objeto a pedidos
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
    else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class AlitasAlert',
        header: `Agregar ${name} al pedido`,
        message: 'Por favor selecciona el sabor de tu bebida.',
        inputs: this.hatsu,
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            id: 'cancel-button',
            handler: () => {
            }
          }, {
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
                  // En lugar de hacer esto deberia llamar un servicio que envie este objeto a pedidos
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
  }


  // ERROR FUNCTION //
  async presentAlertError(name: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Agregar ${name} al pedido`,
      subHeader: '¡Ups!',
      message: 'Recuerda seleccionar una bebida.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
