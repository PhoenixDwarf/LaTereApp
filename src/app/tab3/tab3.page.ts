import { Component, OnInit } from '@angular/core';
import { UserInteractionService } from '../services/user-interaction.service';
import { Order } from './interfaces';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CompleteUser } from '../tab1/pages/interfaces/user.interface';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private UserInteractionService: UserInteractionService,
    private OrdersService: OrdersService,
    private Router: Router,
    public alertController: AlertController,
  ) { }

  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));
  arrayPedido: Order[] = [];
  totalPrice: number = 0;
  networkState: boolean;
  isthereOrder: boolean = false;

  ngOnInit() {
    this.OrdersService.newOrder$.subscribe((res) => {
      console.log('Esta es la respuesta: ', res);
      this.arrayPedido.push(res);
      this.totalPrice = (this.totalPrice + res.price);
    });
    this.UserInteractionService.network$.subscribe((res) => {
      this.networkState = res;
    });
    this.Router.navigateByUrl('tabs/tab1');
  }

  removeItem(id: number) {
    this.totalPrice = (this.totalPrice - this.arrayPedido[id].price);
    this.UserInteractionService.presentToast(`Se ha removido ${this.arrayPedido[id].name} del pedido. `);
    this.arrayPedido.splice(id, 1);
  }


  async cancelOrder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Cancelar pedido`,
      subHeader: '',
      message: '¿Estás seguro que deseas cancelar tu pedido?',
      buttons: [
        {
          text: 'Atras',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
          }
        },
        {
          text: 'Cancelar',
          id: 'confirm-button',
          handler: () => {
            this.arrayPedido = [];
            this.totalPrice = 0;
          }
        }
      ],
    });
    await alert.present();
  }

  submitOrder() {
    this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
    if (this.loginData == null) {
      this.presentAlertErrorNoLoggedIn();
    } else {
      if (this.networkState == false) {
        this.presentAlertErrorNoInternet();
      }
      else {
        this.confirmOrder();
      }
    }
  }



  async presentAlertErrorNoInternet() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sin conexión',
      subHeader: '',
      message: 'No cuentas con conexión a internet en este momento. Por favor intenta mas tarde.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertErrorNoLoggedIn() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Iniciar sesión',
      subHeader: '',
      message: 'Debes iniciar sesión antes de poder confirmar tu pedido.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async confirmOrder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Confirmar pedido`,
      subHeader: '',
      message: '¿Estas completamente seguro de que deseas confirmar tu pedido?',
      buttons: [
        {
          text: 'Atras',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
          }
        },
        {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            const orderToSubmit = [{
              products: this.arrayPedido,
              totalprice: this.totalPrice
            }]
            console.log(orderToSubmit);
            this.isthereOrder = true; 
          }
        }
      ],
    });
    await alert.present();
  }
}
