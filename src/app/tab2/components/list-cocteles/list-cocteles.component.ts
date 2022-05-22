import { Component} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { list } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-list-cocteles',
  templateUrl: './list-cocteles.component.html',
  styleUrls: ['./list-cocteles.component.scss'],
})
export class ListCoctelesComponent {

  constructor(
    public alertController: AlertController,
  ) 
  {

  }

  list:list[] = [
    {
      name: 'Martini',
      ingredientes:['- Ginebra','- Martini','- Aceituna','- Hielo'],
      price: 15000
    },

    {
      name: 'Cuba libre',
      ingredientes:['- Ron Negro','- Coca Cola','- Gotas de Limón','- Gotas Amargas','- Hielo'],
      price: 13000
    },

    {
      name: 'Margarita',
      ingredientes:['- Tequila Blanco','- Sumo de Limón','- Hielo'],
      price: 15000
    },

    {
      name: 'Margarita La Tere',
      ingredientes:['- Tequila Blanco','- Sumo de Naranja y Limón','- Hielo'],
      price: 14500
    },

    {
      name: 'Piña Colada',
      ingredientes:['- Ron','- Jugo de Piña','- Crema de Coco','- Hielo'],
      price: 17500
    },

    {
      name: 'Mojito',
      ingredientes:['- Ron Blanco','- Hierbabuena','- Soda','- Azucar','- Zumo de Limón','- Hielo'],
      price: 14900
    },

    {
      name: 'Daiquiri',
      ingredientes:['- Ron','- Zumo de Limón','- Azucar'],
      price: 12000
    },

    {
      name: 'Tom Collins',
      ingredientes:['- Ginebra','- Jugo de Limón','- Estevia','- Soda'],
      price: 13000
    },

    {
      name: 'Manhattan',
      ingredientes:['- Whiskey','- Vermouth Rojo','- Hielo'],
      price: 18000
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
      message: `Por motivos de calidad, nuestro coctel <strong> ${name} </strong> está disponible únicamente en nuestro local.`,
      buttons: ['OK']
    });
    await alert.present();
  }

}
