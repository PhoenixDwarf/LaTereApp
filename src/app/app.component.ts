import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { UserInteractionService } from './services/user-interaction.service';
import { CompleteUser } from './tab1/pages/interfaces/user.interface';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));

  profileItem: string;

  checker: boolean;

  disconnectSubscription: any;
  connectSubscription: any;

  constructor(private UserInteractionService: UserInteractionService,
    private network: Network,
    private ScreenOrientation: ScreenOrientation
  ) {
    this.fillMenuItems();
  }

  fillMenuItems() {
    if (this.loginData != null) {
      if (this.loginData.isadmin == false) {
        this.profileItem = 'Perfil';
        this.checker = false;
      } else {
        this.profileItem = 'Perfil - ADMIN';
        this.checker = false;
      }
    }
    else {
      this.profileItem = 'Ingresar';
      this.checker = true;
    }
  }

  ngOnInit() {
    this.UserInteractionService.loginUpdated$.subscribe(res => {
      this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
      this.fillMenuItems();
    });

    this.networkDisconnect();
    this.networkConnect();
  }

  networkDisconnect() {
    this.disconnectSubscription = this.network.onDisconnect().subscribe(async () => {
      this.UserInteractionService.network$.emit(false);
      this.UserInteractionService.presentToast('Sin acceso a internet.');
    });
  }

  networkConnect() {
    this.connectSubscription = this.network.onConnect().subscribe(() => {
    this.UserInteractionService.network$.emit(true);
    this.UserInteractionService.presentToast('Acceso a internet recuperado.');
    });
  }
}
