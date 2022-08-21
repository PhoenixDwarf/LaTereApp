import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import 'animate.css'

import { DatabaseService } from '../../../services/database.service';
import { UserInteractionService } from '../../../services/user-interaction.service';
import { CompleteUser } from '../interfaces/user.interface';
import { list } from '../interfaces/login.interface';
import { OrderToSubmit } from 'src/app/tab3/interfaces';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ngOnInit() {
    this.UserInteractionService.editprofileUpdated$.subscribe(res => {
    this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
    this.fillList();
    });

    this.UserInteractionService.network$.subscribe((res) => {
    this.networkState = res;
    });
  }


  constructor(
    public alertController: AlertController,
    private DatabaseService: DatabaseService,
    private UserInteractionService: UserInteractionService,
    private Router: Router,
  ) {
    this.listValidatorDef();
  }

  isphoneselected = false;
  isemailselected = false;
  list: list[];
  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));
  listValidator: boolean;
  isEditprofileUpdated: boolean;
  networkState:boolean;
  ordersArray:OrderToSubmit[] =[];

  listValidatorDef() {
    if (this.loginData != null) {
      if (this.loginData.isadmin == false) {
        this.fillList();
        this.listValidator = true;
      }
      else {
        this.listValidator = false;
        this.fillList();
        this.getOrders();
      }
    }
  }

  getOrders(){
    this.UserInteractionService.presentLoading('Verificando datos…');
        this.DatabaseService.getOrders().subscribe({
          next: (res) => {
            this.UserInteractionService.dismissLoading();
            res.map((res) => {
              this.ordersArray.push(res);
            });
          },
          error: (err) => {
            this.UserInteractionService.dismissLoading();
            console.log(err);
          }
        });
  }

  getProducts(phone:string, index:number){
    this.UserInteractionService.presentLoading('Verificando datos…');
    this.DatabaseService.getProducts(phone).subscribe({
      next: (res) => {
        this.UserInteractionService.dismissLoading();
        this.ordersArray[index].products = res;
        console.log(this.ordersArray);
      },
      error: (err) => {
        this.UserInteractionService.dismissLoading();
        console.log(err);
      }
    });
  }

  fillList() {
    this.list = [
      {
        info: this.loginData.name,
        tag: 'Nombres'
      },
      {
        info: this.loginData.lastname,
        tag: 'Apellidos'
      },
      {
        info: this.loginData.address,
        tag: 'Dirección'
      },
      {
        info: this.loginData.neighborhood,
        tag: 'Barrio'
      },
      {
        info: this.loginData.phone,
        tag: 'Número telefónico'
      },
      {
        info: this.loginData.email,
        tag: 'Correo electrónico'
      }
    ];
  }

  fillListADMIN() {
    this.list = [];
  }

  async cancelOrder( phone:string, index:number ) { 
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Cancelar pedido`,
      subHeader: '',
      message: '¿Estas seguro que deseas cancelar el pedido?',
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
            this.UserInteractionService.presentLoading('Verificando datos…');
            this.DatabaseService.deletelOrder(phone).subscribe({
              next: () => {
                this.DatabaseService.deletProducts(phone).subscribe({
                  next: () => {
                    this.UserInteractionService.dismissLoading();
                    this.UserInteractionService.presentToast('El pedido ha sido cancelado');
                    this.ordersArray.splice(index,1);
                  },
                  error: (err) => {
                    this.UserInteractionService.dismissLoading();
                    console.log(err);
                  }
                })
              },
              error: (err) => {
                this.UserInteractionService.dismissLoading();
                console.log(err);
              }
            });
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertError1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Iniciar sesión',
      subHeader: '',
      message: 'No se ha reconocido el correo ingresado o la contraseña.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertError2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Iniciar sesión',
      subHeader: '',
      message: 'No se ha reconocido el número telefónico ingresado o la contraseña.',
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

  loginFormEmail = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  });
  loginFormPhone = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  });

  emailselected() {
    this.isemailselected = true;
    this.isphoneselected = false;
    this.loginFormPhone.reset();
  }
  phoneselected() {
    this.isphoneselected = true;
    this.isemailselected = false;
    this.loginFormEmail.reset();
  }


  getEmailFormData() {

    if (this.networkState == false) {
      this.presentAlertErrorNoInternet();
    }
    else {

      this.UserInteractionService.presentLoading('Verificando datos…');
      let email: string = this.loginFormEmail.get('email').value;
      let password: string = this.loginFormEmail.get('password').value;

      this.DatabaseService.logUserByEmail(email, password).subscribe({
        next: (res) => {
          this.UserInteractionService.dismissLoading();
          if (res == null) {
            this.presentAlertError1();
          }
          else {
            this.loginFormEmail.reset();
            res.password = null;
            res.securityq = null;
            localStorage.setItem('LoggedUser', JSON.stringify(res));
            this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
            this.listValidatorDef();
            this.UserInteractionService.presentToast("Se ha iniciado sesión correctamente");
            this.UserInteractionService.loginUpdated$.emit(true);
            this.Router.navigateByUrl('/');
          }
        },
        error: (err) => {
          this.UserInteractionService.dismissLoading();
          console.log(err);
        }
      })
    }
  }

  getPhoneFormData() {

    if (this.networkState == false) {
      this.presentAlertErrorNoInternet();
    }
    else {

      this.UserInteractionService.presentLoading('Verificando datos…');

      let phone: string = this.loginFormPhone.get('phone').value;
      let password: string = this.loginFormPhone.get('password').value;

      this.DatabaseService.logUserByPhone(phone, password).subscribe({
        next: (res) => {
          this.UserInteractionService.dismissLoading();
          if (res == null) {
            this.presentAlertError2();
          }
          else {
            this.loginFormPhone.reset();
            res.password = null;
            res.securityq = null;
            localStorage.setItem('LoggedUser', JSON.stringify(res));
            this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
            this.listValidatorDef();
            this.UserInteractionService.presentToast("Se ha iniciado sesión correctamente");
            this.UserInteractionService.loginUpdated$.emit(true);
            this.Router.navigateByUrl('/');
          }
        },
        error: (err) => {
          this.UserInteractionService.dismissLoading();
          console.log(err);
        }
      })
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cerrar sesión',
      message: '¿Estás seguro que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
          }
        }, {
          text: 'Cerrar sesión',
          id: 'confirm-button',
          handler: () => {
            localStorage.removeItem('LoggedUser');
            this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
            this.UserInteractionService.loginUpdated$.emit(true);
            this.UserInteractionService.presentToast("Se ha cerrado la sesión correctamente");
          }
        }
      ]
    });
    await alert.present();
  }

}

