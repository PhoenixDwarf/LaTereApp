import { Component, OnInit } from '@angular/core';
import { Video } from './videointerface';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

@Component({
  selector: 'app-help2',
  templateUrl: './help2.page.html',
  styleUrls: ['./help2.page.scss'],
})
export class Help2Page implements OnInit {

  listVideos:Video[] = [
    {
      id: 'wahzGYTo9E4',
      img: 'https://img.youtube.com/vi/wahzGYTo9E4/0.jpg',
      title: 'Registrate'
    },
    {
      id: 'Wz0shp-jSNw',
      img: 'https://img.youtube.com/vi/Wz0shp-jSNw/0.jpg',
      title: 'Iniciar sesión'
    },
    {
      id: 'wahzGYTo9E4',
      img: 'https://img.youtube.com/vi/wahzGYTo9E4/0.jpg',
      title: 'Configurar pregunta de seguridad'
    },
    {
      id: '6ayPnU8fNuk',
      img: 'https://img.youtube.com/vi/6ayPnU8fNuk/0.jpg',
      title: 'Olvide mi contraseña'
    },
    {
      id: '_J99fQjK84M',
      img: 'https://img.youtube.com/vi/_J99fQjK84M/0.jpg',
      title: 'Actualizar mis datos'
    },
    {
      id: 'cOMKz2_FEvA',
      img: 'https://img.youtube.com/vi/cOMKz2_FEvA/0.jpg',
      title: 'Realizar pedido'
    },
    {
      id: 'rodNdfEv-pQ',
      img: 'https://img.youtube.com/vi/rodNdfEv-pQ/0.jpg',
      title: 'Califica tu experiencia'
    },
  ]
  
  constructor(
    private youtube: YoutubeVideoPlayer
  ) { }

  ngOnInit() {
  }

  playVideo(id:string){
    this.youtube.openVideo(id);
  }
}
