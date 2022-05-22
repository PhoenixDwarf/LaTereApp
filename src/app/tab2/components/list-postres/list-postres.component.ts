import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-postres',
  templateUrl: './list-postres.component.html',
  styleUrls: ['./list-postres.component.scss'],
})
export class ListPostresComponent {

  constructor(
    public alertController: AlertController,
  ) 
  {

  }

  list:list[] = [
    {
      name: 'Brownie Nana con Helado de Vainilla',
      ingredientes:['- Torta de Chocolate','- Helado'],
      price: 9000
    },

    {
      name: 'Nana Apple Crips con Helado',
      ingredientes:['- Cumbre de Galletas','- Frutos Secos','- Helado de Vainilla'],
      price: 9500
    },

    {
      name: 'Chocolate de Tere',
      ingredientes:['- Mini Sandwich de Galleta Rellena con Helado de Chocolate','- Ganache de Chocolate'],
      price: 10000
    },

    {
      name: 'TereButter Chipwich',
      ingredientes:['- Mini Sandwich de Galleta Rellena con Helado de Vainilla','- Mousse de Banano'],
      price: 9500
    },

  ];

  showAlert( id:number ){
    const name = this.list[id].name;
    this.presentAlertError(name);
  }

  async presentAlertError(name: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: `Disfrútalo presencialmente`,
      subHeader: '¡Ups!',
      message: `Por motivos de calidad, nuestro postre <strong> ${name} </strong> está disponible únicamente en nuestro local.`,
      buttons: ['OK']
    });
    await alert.present();
  }

}
