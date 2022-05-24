import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class UserInteractionService implements OnInit{

  editprofileUpdated$ = new EventEmitter<boolean>();
  loginUpdated$ = new EventEmitter<boolean>();

  network$ = new EventEmitter<boolean>();

  isLoading = false;


  constructor(
    public toastController: ToastController, 
    public loadingController: LoadingController
    )
    {
      
    }

    ngOnInit() {
    }

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


