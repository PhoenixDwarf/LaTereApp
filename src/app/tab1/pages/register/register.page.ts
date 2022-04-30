import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


import { DatabaseService } from '../../services/database.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data:User;
  constructor(public alertController: AlertController, private DatabaseService:DatabaseService) { }

  ngOnInit() {
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
      message: 'El correo electrónico o la contraseña ingresada se han registrado anteriormente. Intenta iniciar sesión.',
      buttons: ['OK']
    });
    await alert.present();
  }


  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    neighborhood: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[0-9]\d*$/)]),
    email: new FormControl('', [Validators.required,Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    confimPassword: new FormControl('', Validators.required)
  })

  getFormData(){
    
    this.data ={
      name : this.registerForm.get('name').value,
      lastname : this.registerForm.get('lastname').value,
      address : this.registerForm.get('address').value,
      neighborhood : this.registerForm.get('neighborhood').value,
      phone : this.registerForm.get('phone').value,
      email : this.registerForm.get('email').value,
      password : this.registerForm.get('confimPassword').value
    }
    this.DatabaseService.addUser(this.data).subscribe({
      next: () =>{
        this.presentAlert();
        this.registerForm.reset();
      },
      error: () => {
        this.presentAlertError();
        this.registerForm.reset();
      }
    });
  }
}