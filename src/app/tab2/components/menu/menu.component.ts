import { Component } from '@angular/core';
import { MenuOptions } from '../../interfaces/tab2.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  menuOptions:MenuOptions[] =[
    {
      menuName:'Hamburguesas',
      menuImage:'./././assets/images/Hamburguesa.png',
      menuUrl:'hamburguesas1',
      menuDescription: ''
    },
    {
      menuName:'Perros',
      menuImage:'./././assets/images/Perro.jpg',
      menuUrl:'perros',
      menuDescription: ''
    },
    {
      menuName:'Platos a la Carta',
      menuImage:'./././assets/images/Costilla.png',
      menuUrl:'platos',
      menuDescription: ''
    },
    {
      menuName:'Alitas y Trozos',
      menuImage:'./././assets/images/Alitas.jpg',
      menuUrl:'alitas',
      menuDescription: ''
    },
    {
      menuName:'Mordiscos (entradas)',
      menuImage:'./././assets/images/Patacon.jpg',
      menuUrl:'mordiscos',
      menuDescription: ''
    },
    {
      menuName:'Brochetas y Patacones',
      menuImage:'./././assets/images/Patacon2.png', //FALTA IMAGEN
      menuUrl:'brochetas',
      menuDescription: ''
    },
    {
      menuName:'Cervezas y Gaseosas',
      menuImage:'./././assets/images/Cerveza.png', // FALTA IMAGEN
      menuUrl:'cervezasygaseosas',
      menuDescription: ''
    },
    {
      menuName:'Jugos',
      menuImage:'./././assets/images/Jugos.png', // FALTA IMAGEN
      menuUrl:'jugos',
      menuDescription: ''
    },
    {
      menuName:'Cocteles',
      menuImage:'./././assets/images/Cocteles.png', // FALTA IMAGEN
      menuUrl:'cocteles',
      menuDescription: 'Disfrútalos en nuestro local'
    },
    {
      menuName:'Postres',
      menuImage:'./././assets/images/Postre.png', // FALTA IMAGEN
      menuUrl:'postres',
      menuDescription: 'Disfrútalos en nuestro local'
    }
  ];

}


