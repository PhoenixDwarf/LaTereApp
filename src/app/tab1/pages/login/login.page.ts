import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { LoginUser } from '../interfaces/login.interface';
import { DatabaseService } from '../../services/database.service';
import 'animate.css'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{

  ngOnInit() {
    console.log("inicie")
  }
  
  constructor(public alertController: AlertController, private DatabaseService: DatabaseService) { }

  isphoneselected = false;
  isemailselected = false;
  loginData: LoginUser;
  isUserLogged = false;

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Iniciar sesión',
      subHeader: '',
      message: 'Se ha iniciado sesión correctamente.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertError1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Iniciar sesión',
      subHeader: '',
      message: 'No se ha reconocido el correo ingresado.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertError2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Iniciar sesión',
      subHeader: '',
      message: 'No se ha reconocido el número telefónico ingresado.',
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

    let email: string = this.loginFormEmail.get('email').value;
    let password: string = this.loginFormEmail.get('password').value;

    this.DatabaseService.logUserByEmail(email, password).subscribe({
      next: (res) => {
        if (res == null) {
          this.presentAlertError1();
        }
        else {
          this.loginFormEmail.reset();
          this.presentAlert();
          this.isUserLogged = true;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  getPhoneFormData() {

    let phone: string = this.loginFormPhone.get('phone').value;
    let password: string = this.loginFormPhone.get('password').value;

    this.DatabaseService.logUserByPhone(phone, password).subscribe({
      next: (res) => {
        if (res == null) {
          this.presentAlertError2();
        }
        else {
          this.loginFormPhone.reset();
          this.presentAlert();
          this.isUserLogged = true;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}

