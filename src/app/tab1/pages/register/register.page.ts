import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Router } from '@angular/router';


import { DatabaseService } from '../../../services/database.service';
import { CompleteUser, User } from '../interfaces/user.interface';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data: User;
  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));
  isUserLogged = false;
  networkState: boolean;

  constructor(public alertController: AlertController, private DatabaseService: DatabaseService, private UserInteractionService: UserInteractionService, private Router:Router) {

    if (this.loginData != null) {
      this.isUserLogged = true;
    }


  }

  ngOnInit() {
    this.UserInteractionService.network$.subscribe((res) => {
      this.networkState = res;
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registrar Cuenta',
      subHeader: '',
      message: 'Su cuenta ha sido creada exitosamente, ya puedes iniciar sesión.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registrar Cuenta',
      subHeader: 'Cuenta existente',
      message: 'El correo electrónico o el número ingresado se ha registrado anteriormente. Intenta iniciar sesión.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertErrorNoInternet() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sin conexión',
      subHeader: 'Cuenta existente',
      message: 'No cuentas con conexión a internet en este momento. Por favor intenta mas tarde.',
      buttons: ['OK']
    });
    await alert.present();
  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    neighborhood: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/), Validators.maxLength(60)]),
    password: new FormControl('', [ Validators.required, Validators.maxLength(16), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,}')]),
    confimPassword: new FormControl('', Validators.required)
  })

  getFormData() {
    if (this.networkState == false) {
      this.presentAlertErrorNoInternet();
    }
    else {
      this.UserInteractionService.presentLoading('Verificando datos…');
      this.data = {
        name: this.registerForm.get('name').value,
        lastname: this.registerForm.get('lastname').value,
        address: this.registerForm.get('address').value,
        neighborhood: this.registerForm.get('neighborhood').value,
        phone: this.registerForm.get('phone').value,
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('confimPassword').value
      }
      this.DatabaseService.addUser(this.data).subscribe({
        next: () => {
          this.UserInteractionService.dismissLoading();
          this.presentAlert();
          this.registerForm.reset();
          this.Router.navigateByUrl('/login');
        },
        error: (err) => {
          this.UserInteractionService.dismissLoading();
          this.presentAlertError();
          this.registerForm.reset();
          console.log(err);
        }
      });
    }
  }
}