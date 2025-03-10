import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { UbicanosPage } from './ubicanos.page';

const routes: Routes = [
  {
    path: '',
    component: UbicanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [YoutubeVideoPlayer]
})
export class UbicanosPageRoutingModule {}
