import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl'
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.page.html',
  styleUrls: ['./ubicanos.page.scss'],
})
export class UbicanosPage implements OnInit {

  constructor(
    private youtube: YoutubeVideoPlayer
  ) { 
  }

  urlVideo = 'https://img.youtube.com/vi/xEf-dhBR-Qo/1.jpg';

  ngOnInit() {
    
  }

  ionViewDidEnter(){
    mapboxgl.accessToken = 'pk.eyJ1IjoicGhvZW5peGR3YXJmIiwiYSI6ImNsMzdvaXRwMDNveDMzY3Bma2tyNDlkYWEifQ.80dzhD1AK_JUOo-qlO-T2A';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-73.3499985, 5.5530031],// starting position [lng, lat]
      zoom: 14 // starting zoom
    }); 
    map.resize();
    new mapboxgl.Marker()
    .setLngLat([-73.3499985, 5.5530031])
    .addTo(map);
  }  

  playVideo(){
    this.youtube.openVideo('xEf-dhBR-Qo');
  }

}
