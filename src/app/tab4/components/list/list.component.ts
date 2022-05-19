import { Component} from '@angular/core';
import { Options } from '../../interfaces/tab4.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  options:Options[] = [
    {
      name: '¿Quiénes somos?',
      icon: '././././assets/icon/quienessomosVector.svg',
      url: 'quienessomos'
    },

    {
      name: 'Ubícanos',
      icon: '././././assets/icon/ubicanosVector.svg',
      url: 'ubicanos'
    },

    {
      name: 'Stickers - (Próximamente)',
      icon: '././././assets/icon/stickersVector.svg',
      url: 'stickers'
    },

    {
      name: 'Coméntanos tu experiencia',
      icon: '././././assets/icon/experienciaVector.svg',
      url: 'experiencia'
    },

    {
      name: 'Contáctanos',
      icon: '././././assets/icon/contactanosVector.svg',
      url: 'contactanos'
    },

    {
      name: 'Privacidad',
      icon: '././././assets/icon/privacidadVector.svg',
      url: 'privacidad'
    },

    {
      name: 'Sobre la App',
      icon: '././././assets/icon/sobrelaappVector.svg',
      url: 'sobrelaapp'
    },
    
  ];



}
