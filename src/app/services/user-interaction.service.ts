import { EventEmitter, Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserInteractionService {

  editprofileUpdated$ = new EventEmitter<boolean>();
  loginUpdated$ = new EventEmitter<boolean>();

  isLoading = false;


  constructor(public toastController: ToastController, public loadingController: LoadingController){}
  async presentToast(receivedMsg:string) {  
    const toast = await this.toastController.create({
      message: receivedMsg,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading(receivedMsg:string) {
    this.isLoading = true;
    return await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: receivedMsg,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if(!this.isLoading){
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }


  async dismissLoading() {
    this.isLoading = false;
    return this.loadingController.dismiss().then(()=> console.log('dismissed'));
  }
  
}


