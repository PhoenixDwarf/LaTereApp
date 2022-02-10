import { Component, OnInit } from '@angular/core';
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
      menuImage:'./././assets/images/Hamburguesa.jpg',
      menuUrl:'hamburguesas1'
    },
    {
      menuName:'Perros',
      menuImage:'./././assets/images/Perro.jpg',
      menuUrl:'perros'
    },
    {
      menuName:'Platos a la Carta',
      menuImage:'./././assets/images/Costilla.jpg',
      menuUrl:'platos'
    },
    {
      menuName:'Alitas',
      menuImage:'./././assets/images/Alitas.jpg',
      menuUrl:'alitas'
    },
    {
      menuName:'Mordiscos',
      menuImage:'./././assets/images/Patacon.jpg',
      menuUrl:'mordiscos'
    },
    {
      menuName:'Brochetas',
      menuImage:'./././assets/images/HamburguesaDePrueba.jpg', //FALTA IMAGEN
      menuUrl:'brochetas'
    },
    {
      menuName:'Patacones',
      menuImage:'./././assets/images/Patacon2.jpg',
      menuUrl:'patacones'
    },
    {
      menuName:'Cervezas y Gaseosas',
      menuImage:'./././assets/images/HamburguesaDePrueba.jpg', // FALTA IMAGEN
      menuUrl:'cervezasygaseosas'
    },
    {
      menuName:'Jugos',
      menuImage:'./././assets/images/HamburguesaDePrueba.jpg', // FALTA IMAGEN
      menuUrl:'jugos'
    },
    {
      menuName:'Cocteles',
      menuImage:'./././assets/images/HamburguesaDePrueba.jpg', // FALTA IMAGEN
      menuUrl:'cocteles'
    },
    {
      menuName:'Postres',
      menuImage:'./././assets/images/HamburguesaDePrueba.jpg', // FALTA IMAGEN
      menuUrl:'postres'
    }
  ];

}


