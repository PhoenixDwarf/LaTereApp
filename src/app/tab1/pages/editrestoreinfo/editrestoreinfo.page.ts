import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { CompleteUser, UpdateSecurity } from '../interfaces/user.interface';

@Component({
  selector: 'app-editrestoreinfo',
  templateUrl: './editrestoreinfo.page.html',
  styleUrls: ['./editrestoreinfo.page.scss'],
})
export class EditrestoreinfoPage implements OnInit {

  constructor(
    public alertController: AlertController,
    private UserInteractionService: UserInteractionService,
    private DatabaseService:DatabaseService
    ) { }

  objeto:UpdateSecurity;
  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));
  isThereAQuestionLet:boolean;
  networkState: boolean;

  temporalSecurityQ:string | null = null;


  ngOnInit() {
    this.UserInteractionService.network$.subscribe((res) => {
      this.networkState = res;
    });
    this.UserInteractionService.presentLoading('Un momento por favor...');
    this.DatabaseService.findUser(this.loginData.id).subscribe({
      next: (res) =>{
        this.temporalSecurityQ = res.securityq;
        this.UserInteractionService.dismissLoading();
        this.isThereAQuestion();
      },
      error: (err) =>{
        console.log(err);
        this.UserInteractionService.dismissLoading();
      }
    });
  }

  editinfoForm = new FormGroup({
    selector: new FormControl('', [Validators.required]),
    data: new FormControl('', [Validators.required, Validators.maxLength(50)])
  })


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
  //LOGIC IS MISSING
  updateRestoreInfo() {
    if (this.networkState == false) {
      this.presentAlertErrorNoInternet();
    }
    else{
      this.UserInteractionService.presentLoading('Actualizando información...');
      this.objeto = {
        securityNumber: Number.parseInt(this.editinfoForm.get('selector').value),
        securityAnswer: String(this.editinfoForm.get('data').value).toLocaleLowerCase()
      }
      this.DatabaseService.updateSecurityQuestion(this.objeto,this.loginData.id).subscribe({
        next: () => {
          this.UserInteractionService.dismissLoading();  
          this.isThereAQuestionLet = true;
          this.DatabaseService.findUser(this.loginData.id).subscribe({
            next:(res) => {
              res.password = null;
              res.securityq = null;
              localStorage.setItem('LoggedUser', JSON.stringify(res));
              this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
            },
            error:(err) => {
              console.log(err);
            }
          })
          this.editinfoForm.reset();
          this.UserInteractionService.presentToast('Se ha actualizado la información exitosamente');
        },
        error: (err) =>{
          this.UserInteractionService.dismissLoading();
          console.log(err);
        }
      });
      
    }
  }

  isThereAQuestion(){
    if(this.temporalSecurityQ != null){
      this.isThereAQuestionLet = true;
    }
    else{
      this.isThereAQuestionLet = false;
    }
  }

}
