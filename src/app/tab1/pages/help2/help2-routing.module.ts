import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Help2Page } from './help2.page';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';

const routes: Routes = [
  {
    path: '',
    component: Help2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    YoutubeVideoPlayer,
  ]
})
export class Help2PageRoutingModule {}
