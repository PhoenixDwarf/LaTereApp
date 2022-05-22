import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { CompleteUser } from 'src/app/tab1/pages/interfaces/user.interface';
import { list } from '../../interfaces/tab2.interface';
import { Order } from '../../../tab3/interfaces';

@Component({
  selector: 'app-list-alitas',
  templateUrl: './list-alitas.component.html',
  styleUrls: ['./list-alitas.component.scss'],
})
export class ListAlitasComponent implements OnInit {
  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));

  array16sauces:string[] = [];

  array24sauces:string[] = [];

  constructor(
    private UserInteractionService: UserInteractionService,
    public alertController: AlertController,
  ) {
  }

  ngOnInit() {
  }

  list: list[] = [
    {
      name: '8 Piezas (una salsa)',
      ingredientes: ['- BBQ Miel', '- Buffalo', '- Honey Master', '- Jalapeño Master', '- Thai Oriental'],
      price: 13000
    },

    {
      name: '16 Piezas (dos salsas)',
      ingredientes: ['- BBQ Miel', '- Buffalo', '- Honey Master', '- Jalapeño Master', '- Thai Oriental'],
      price: 23000
    },

    {
      name: '24 Piezas (tres salsas)',
      ingredientes: ['- BBQ Miel', '- Buffalo', '- Honey Master', '- Jalapeño Master', '- Thai Oriental'],
      price: 33000
    }

  ];

  mainFunction(identifier: number) {
    if (identifier == 0) {
      this.oneOption();
    }
    else if (identifier == 1) {
      this.twoOptions();
    }
    else{
      this.threeOptions();
    }

  }

   // START ALERTS INPUTS //

  async oneOption() {
    let order: Order;
    const name: string = this.list[0].name;
    const price: number = this.list[0].price;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class AlitasAlert',
      header: `¿Agregar ${name} al pedido?`,
      message: `Por favor selecciona la salsa que desees.`,
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: '- BBQ Miel',
          value: 'BBQ Miel',
          handler: () => {
          },
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '- Buffalo',
          value: 'Buffalo',
          handler: () => {
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '- Honey Master',
          value: 'Honey Master',
          handler: () => {
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '- Jalapeño Master',
          value: 'Jalapeño Master',
          handler: () => {
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: '- Thai Oriental',
          value: 'Thai Oriental',
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
            if(res !== undefined){
              order = { 
                name: name,
                price: price,
                options: res
              };
              console.log(order);
              this.UserInteractionService.presentToast(`¡Se ha agregado ${name} al pedido con éxito!`);
            }
            else{
              this.presentAlertError(name);
            }
          }
        }
      ],
    });

    await alert.present();
  }


  async twoOptions( index?:number ) {
    let counter = index | 0;
    let order: Order;
    let message: string = '';

    if(counter == 0){
      message = `Por favor selecciona la <strong> primera </strong> salsa que desees recibir.`;
    }else{
      message = `Por favor selecciona la <strong> segunda </strong> salsa que desees recibir.`;
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
          label: '- BBQ Miel',
          value: 'BBQ Miel',
          handler: () => {
          },
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '- Buffalo',
          value: 'Buffalo',
          handler: () => {
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '- Honey Master',
          value: 'Honey Master',
          handler: () => {
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '- Jalapeño Master',
          value: 'Jalapeño Master',
          handler: () => {
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: '- Thai Oriental',
          value: 'Thai Oriental',
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
              this.array16sauces = [];
          }
        }, {
          text: 'Agregar',
          id: 'confirm-button',
          handler: (res:string) => {
            if(res !== undefined){
              counter++;
              this.array16sauces.push(res);
              if(counter !== 2){
                this.twoOptions(counter);
              }
              else{
                order = { 
                  name: name,
                  price: price,
                  options: this.array16sauces
                };
                console.log(order);
                this.array16sauces = [];
                this.UserInteractionService.presentToast(`¡Se ha agregado ${name} al pedido con éxito!`);
                // En lugar de hacer esto deberia llamar un servicio que envie este objeto a pedidos
              }
            }
            else{
              this.presentAlertError(name);
              this.array16sauces = [];
            }
          }
        }
      ],
    });

    await alert.present();
  }

  async threeOptions( index?:number ) {
    let counter = index | 0;
    let order: Order;
    let message: string = '';

    if(counter == 0){
      message = `Por favor selecciona la <strong> primera </strong> salsa que desees recibir.`;
    }else if(counter == 1){
      message = `Por favor selecciona la <strong> segunda </strong> salsa que desees recibir.`;
    }
    else{
      message = `Por favor selecciona la <strong> tercera </strong> salsa que desees recibir.`;
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
          label: '- BBQ Miel',
          value: 'BBQ Miel',
          handler: () => {
          },
        },
        {
          name: 'radio2',
          type: 'radio',
          label: '- Buffalo',
          value: 'Buffalo',
          handler: () => {
          }
        },
        {
          name: 'radio3',
          type: 'radio',
          label: '- Honey Master',
          value: 'Honey Master',
          handler: () => {
          }
        },
        {
          name: 'radio4',
          type: 'radio',
          label: '- Jalapeño Master',
          value: 'Jalapeño Master',
          handler: () => {
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: '- Thai Oriental',
          value: 'Thai Oriental',
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
              this.array24sauces = [];
          }
        }, {
          text: 'Agregar',
          id: 'confirm-button',
          handler: (res:string) => {
            if(res !== undefined){
              counter++;
              this.array24sauces.push(res);
              if(counter !== 3){
                this.threeOptions(counter);
              }
              else{
                order = { 
                  name: name,
                  price: price,
                  options: this.array24sauces
                };
                console.log(order);
                this.array24sauces = [];
                this.UserInteractionService.presentToast(`¡Se ha agregado ${name} al pedido con éxito!`);
                // En lugar de hacer esto deberia llamar un servicio que envie este objeto a pedidos
              }
            }
            else{
              this.presentAlertError(name);
              this.array24sauces = [];
            }
          }
        }
      ],
    });

    await alert.present();
  }

  // END ALERTS INPUTS //

  loginValidator() {
    if (this.loginData != null) {
      return;
    }
    else {
      this.UserInteractionService.presentToast("¡Aún no has iniciado sesión!");
    }
  }

  async presentAlertError( name:string ) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Agregar ${name} al pedido`,
      subHeader: '¡Ups!',
      message: 'Recuerda seleccionar una salsa.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
