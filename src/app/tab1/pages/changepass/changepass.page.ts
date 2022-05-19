import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { ChangePass, CompleteUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.page.html',
  styleUrls: ['./changepass.page.scss'],
})
export class ChangepassPage implements OnInit {

  data: ChangePass;
  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));
  iscurrentpassgood: boolean;
  iscurrentpassbad: boolean = false;

  constructor(
    public alertController: AlertController,
    private UserInteractionService: UserInteractionService,
    private DatabaseService: DatabaseService
  ) { }


  ngOnInit() {
  }

  changePassForm = new FormGroup({
    password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.maxLength(16)]),
    confimPassword: new FormControl('', Validators.required)
  })

  currentPassForm = new FormGroup({
    currentPassword: new FormControl('', [Validators.minLength(8), Validators.required, Validators.maxLength(16)])
  })

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


  changePass() {
    if (this.changePassForm.get('confimPassword').value == this.loginData.password) {
      this.UserInteractionService.presentToast('La contraseña ingresada debe ser distinta a la actual');
    }
    else {

      let netStatus: boolean = navigator.onLine;
      if (netStatus == false) {
        this.presentAlertErrorNoInternet();
      }
      else {
        this.UserInteractionService.presentLoading('Verificando datos…');
        this.data = {
          password: this.changePassForm.get('confimPassword').value
        }
        this.DatabaseService.changePass(this.data, this.loginData.id).subscribe({
          next: () => {
            this.UserInteractionService.dismissLoading();
            this.UserInteractionService.presentToast('Se ha cambiado la contraseña exitosamente');
            this.changePassForm.reset();
          },
          error: (err) => {
            this.UserInteractionService.dismissLoading();
            this.changePassForm.reset();
            console.log(err);
          }
        });
      }
    }
  }

  checkPass() {

    let currentPass = this.currentPassForm.get('currentPassword').value;
    if (currentPass == this.loginData.password) {
      this.iscurrentpassgood = true;
      this.iscurrentpassbad = false;
    }
    else {
      this.iscurrentpassgood = false;
      this.iscurrentpassbad = true;
      this.UserInteractionService.presentToast("La contraseña que ingresaste no es la correcta");
    }
  }
}
