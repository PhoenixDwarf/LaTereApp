import { Component, OnInit } from '@angular/core';
import { UserInteractionService } from '../services/user-interaction.service';
import { Order, OrderToSubmit } from './interfaces';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CompleteUser } from '../tab1/pages/interfaces/user.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

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
    private DatabaseService: DatabaseService
  ) { }

  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));
  arrayPedido: Order[] = [];
  totalPrice: number = 0;
  networkState: boolean;
  isthereOrder: boolean = false;

  commentForm = new FormGroup({
    comment: new FormControl('', [Validators.required, Validators.maxLength(80)]),
  });

  ngOnInit() {
    this.OrdersService.newOrder$.subscribe((res) => {
      this.OrdersService.isThereOrder$.emit(true);
      this.arrayPedido.push(res);
      console.log(this.arrayPedido);
      this.totalPrice = (this.totalPrice + res.price);
    });
    this.UserInteractionService.network$.subscribe((res) => {
      this.networkState = res;
    });

    this.UserInteractionService.loginUpdated$.subscribe(() => {
      this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
      this.checkOrdersInLogin();
    });
    this.checkOrdersInLogin();
    this.Router.navigateByUrl('tabs/tab1');
  }

  checkOrdersInLogin(){
    if (this.loginData !== null) {
      this.UserInteractionService.presentLoading('Verificando datos…');
      this.DatabaseService.getProducts(this.loginData.phone).subscribe({
        next: (res) => {
          if (res.length !== 0){
            this.OrdersService.isThereOrder$.emit(true);
            res.map((item) => {
              const buildArray = {
                name: item.name,
                price: item.price,
                options: [ item.option1, item.option2, item.option3] 
              }
              this.arrayPedido.push(buildArray);
              this.totalPrice = this.totalPrice + item.price;
            });
            this.isthereOrder = true;
          }else{
            this.isthereOrder = false;
            localStorage.setItem('PendingOrder','false'); 
          }
          this.UserInteractionService.dismissLoading();
        },
        error: (err) => {
          console.log(err);
          this.UserInteractionService.dismissLoading();
        }
      });
    }
    else{
      this.arrayPedido = [];
      this.OrdersService.isThereOrder$.emit(false);
      this.totalPrice = 0;
    }
  }

removeItem(id: number) {
  this.totalPrice = (this.totalPrice - this.arrayPedido[id].price);
  this.UserInteractionService.presentToast(`Se ha removido ${this.arrayPedido[id].name} del pedido. `);
  this.arrayPedido.splice(id, 1);
  if (this.arrayPedido.length == 0) {
    this.OrdersService.isThereOrder$.emit(false);
  }
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
          this.OrdersService.isThereOrder$.emit(false);
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

  async successOrder() {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirmar pedido',
    subHeader: '',
    message: 'Hemos recibido tu pedido con exito.',
    buttons: ['OK']
  });
  await alert.present();
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
          this.UserInteractionService.presentLoading('Verificando datos…');
          const orderToSubmit: OrderToSubmit = {
            products: this.arrayPedido,
            totalprice: this.totalPrice,
            userName: this.loginData.name,
            userLastname: this.loginData.lastname,
            userPhone: this.loginData.phone,
            userAddress: this.loginData.address,
            userNeighborhood: this.loginData.neighborhood,
            userComments: this.commentForm.get('comment').value,
          }
          this.isthereOrder = true;
          this.DatabaseService.addOrder(orderToSubmit).subscribe({
            next: () => {
              orderToSubmit.products.map((res) => {
                res.userPhone = this.loginData.phone;
                this.DatabaseService.addProduct(res).subscribe({
                  next: () => {
                  },
                  error: (err) => {
                    console.log(err);
                  }
                });
              });
              this.commentForm.reset();
              this.UserInteractionService.dismissLoading();
              this.successOrder();
              localStorage.setItem('PendingOrder','true');
            },
            error: (err) => {
              console.log(err);
            }
          });
        }
      }
    ],
  });
  await alert.present();
}
}
