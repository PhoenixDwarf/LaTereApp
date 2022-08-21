import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompleteUser, User } from '../interfaces/user.interface';
import { AlertController } from '@ionic/angular';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';
import { __awaiter } from 'tslib';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  constructor(
    public alertController: AlertController,
    private UserInteractionService: UserInteractionService,
    private DatabaseService: DatabaseService,
    private Router: Router) {
    this.setValue();
  }

  data: User;
  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));
  networkState: boolean;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    lastname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    neighborhood: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]\d*$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/), Validators.maxLength(60)]),
  })

  setValue() {
    this.registerForm.setValue({
      name: this.loginData.name,
      lastname: this.loginData.lastname,
      address: this.loginData.address,
      neighborhood: this.loginData.neighborhood,
      phone: this.loginData.phone,
      email: this.loginData.email,
    });
  }

  cancelEdit() {
    this.setValue();
    this.Router.navigateByUrl('/login');
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
        password: this.loginData.password
      }
      this.DatabaseService.updateUser(this.data, this.loginData.id).subscribe({
        next: async() => {
            const awaiter = this.DatabaseService.findUser(this.loginData.id).toPromise().then((res)=>{
              res.password = null;
              res.securityq = null;
              localStorage.setItem('LoggedUser', JSON.stringify(res));
          }).catch((err)=>{
            console.log(err);
          })
          this.UserInteractionService.dismissLoading();  
          this.UserInteractionService.presentToast('Se ha actualizado la información exitosamente');
          await awaiter;
          this.UserInteractionService.editprofileUpdated$.emit(true);
          this.Router.navigateByUrl('/login');
          },
        error: (err) => {
          this.UserInteractionService.dismissLoading();
          console.log(err);
        }
      });
    }
  }

  ngOnInit() {
    this.UserInteractionService.network$.subscribe((res) => {
      this.networkState = res;
    });
  }



}
