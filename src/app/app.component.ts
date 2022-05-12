import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserInteractionService } from './services/user-interaction.service';
import { CompleteUser } from './tab1/pages/interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  loginData: CompleteUser = JSON.parse(localStorage.getItem('LoggedUser'));

  profileItem:string;

  checker:boolean;

  constructor(private UserInteractionService: UserInteractionService) {
    this.fillMenuItems();
  }

  fillMenuItems(){
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
   this.UserInteractionService.loginUpdated$.subscribe( res => {
     this.loginData = JSON.parse(localStorage.getItem('LoggedUser'));
     this.fillMenuItems();
   })
  }
}
