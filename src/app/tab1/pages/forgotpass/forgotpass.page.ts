import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { ChangePass } from '../interfaces/user.interface';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {

  constructor(
    public alertController: AlertController,
    private UserInteractionService: UserInteractionService,
    private DatabaseService: DatabaseService,
    private Router: Router
  ) { }

  isphoneselected = false;
  isemailselected = false;
  networkState: boolean;
  showEmailAlert: boolean = false;
  showPhoneAlert: boolean = false;
  showFirstP: boolean = true;
  showQuestionSection: boolean = false;
  showChangePass: boolean = false;
  showOptions: boolean = true;

  temporalSecurityqnumber: number;
  temporalSecurityAnswer: string;
  temporalID: number;
  temporalSecurityQ: string;
  data: ChangePass;

  questions() {

    switch (this.temporalSecurityqnumber) {
      case 1: {
        this.temporalSecurityQ = '¿Apellido de tu mejor amigo de infancia?';
        break;
      }
      case 2: {
        this.temporalSecurityQ = '¿Cuál sería tu trabajo ideal?';
        break;
      }
      case 3: {
        this.temporalSecurityQ = '¿En qué ciudad se conocieron tus padres?';
        break;
      }
      case 4: {
        this.temporalSecurityQ = '¿Como se llama la primera playa a la que fuiste?';
        break;
      }
      case 5: {
        this.temporalSecurityQ = '¿Como se llamaba tu maestro favorito en la escuela primaria?';
        break;
      }
      case 6: {
        this.temporalSecurityQ = '¿Cuál fue la primera película que viste en el cine?';
        break;
      }
      case 7: {
        this.temporalSecurityQ = '¿Como se llamaba tu primera mascota?';
        break;
      }
      case 8: {
        this.temporalSecurityQ = '¿Dónde conociste a tu pareja?';
        break;
      }
      case 9: {
        this.temporalSecurityQ = '¿En qué ciudad te gustaría jubilarte?';
        break;
      }
      case 10: {
        this.temporalSecurityQ = '¿En qué barrio vivía su mejor amigo de infancia?'
        break;
      }
      default: {
        break;
      }
    }


  }



  ngOnInit() {
    this.UserInteractionService.network$.subscribe((res) => {
      this.networkState = res;
    });
  }


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

  loginFormEmail = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)])
  });
  loginFormPhone = new FormGroup({
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)])
  });

  answerForm = new FormGroup({
    insertedAnswer: new FormControl('', [Validators.required, Validators.maxLength(50)])
  })

  changePassForm = new FormGroup({
    password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.maxLength(16)]),
    confimPassword: new FormControl('', Validators.required)
  })


  getSecurityByEmail() {

    if (this.networkState == false) {
      this.presentAlertErrorNoInternet();
    }
    else {
      this.UserInteractionService.presentLoading('Verificando datos…');
      let email: string = this.loginFormEmail.get('email').value;

      this.DatabaseService.getSecurityQuestionByEmail(email).subscribe({
        next: (res) => {
          this.UserInteractionService.dismissLoading();

          if (res == null) {
            this.presentAlertErrorEmail();
          }
          else if ((res.securityqnumber == null) && (res.securityq == null)) {
            this.showEmailAlert = true;
            this.showFirstP = false;
          }
          else {
            this.showEmailAlert = false;
            this.showFirstP = false;
            this.showQuestionSection = true;
            this.showOptions = false;
            this.temporalSecurityqnumber = res.securityqnumber;
            this.temporalSecurityAnswer = res.securityq;
            this.temporalID = res.id;
            this.questions();
          }
        },
        error: (err) => {
          this.UserInteractionService.dismissLoading();
          console.log(err);

        }
      })

    }

  }

  getSecurityByPhone() {

    if (this.networkState == false) {
      this.presentAlertErrorNoInternet();
    }
    else {
      this.UserInteractionService.presentLoading('Verificando datos…');
      let phone: string = this.loginFormPhone.get('phone').value;

      this.DatabaseService.getSecurityQuestionByPhone(phone).subscribe({
        next: (res) => {
          this.UserInteractionService.dismissLoading();

          if (res == null) {
            this.presentAlertErrorPhone();
          }
          else if ((res.securityqnumber == null) && (res.securityq == null)) {
            this.showPhoneAlert = true;
            this.showFirstP = false;
          }
          else {
            this.showPhoneAlert = false;
            this.showFirstP = false;
            this.showQuestionSection = true;
            this.showOptions = false;
            this.temporalSecurityqnumber = res.securityqnumber;
            this.temporalSecurityAnswer = res.securityq;
            this.temporalID = res.id;
            this.questions();
          }
        },
        error: (err) => {
          this.UserInteractionService.dismissLoading();
          console.log(err);

        }
      })

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

  async presentAlertErrorEmail() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recuperar acceso',
      subHeader: '',
      message: 'No se ha reconocido el correo electrónico ingresado.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertErrorPhone() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Recuperar acceso',
      subHeader: '',
      message: 'No se ha reconocido el número telefónico ingresado.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertPassChanged() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cambio de contraseña',
      subHeader: '',
      message: 'Se ha actualizado la contraseña exitosamente, ingrese sesión de ahora en adelante con ella.',
      buttons: ['OK']
    });
    await alert.present();
  }

  checkAnswer() {
    if (this.answerForm.get('insertedAnswer').value == this.temporalSecurityAnswer) {
      this.UserInteractionService.presentToast("Respuesta correcta");
      this.showChangePass = true;
      this.showQuestionSection = false;
      this.isphoneselected = false;
      this.isemailselected = false;
    }
    else {
      this.showChangePass = false;
      this.UserInteractionService.presentToast("Respuesta invalida");
    }
  }

  changePass() {
    if (this.networkState == false) {
      this.presentAlertErrorNoInternet();
    }
    else {
      this.UserInteractionService.presentLoading('Verificando datos…');
      this.data = {
        password: this.changePassForm.get('confimPassword').value
      }
      this.DatabaseService.changePass(this.data, this.temporalID).subscribe({
        next: () => {
          this.UserInteractionService.dismissLoading();
          this.presentAlertPassChanged();
          this.resetPage();
          this.Router.navigateByUrl('/login');
        },
        error: (err) => {
          this.UserInteractionService.dismissLoading();
          this.changePassForm.reset();
          console.log(err);
        }
      });
    }
  }

  resetPage() {
    this.changePassForm.reset();
    this.answerForm.reset();
    this.loginFormPhone.reset();
    this.loginFormEmail.reset();
    this.showFirstP = true;
    this.showOptions = true;
    this.showChangePass = false;
    this.showQuestionSection = false;
  }
}
