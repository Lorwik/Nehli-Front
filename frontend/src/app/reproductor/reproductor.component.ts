import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  videoItems = [
    {
      name: "Manos a la obra - 5x106 - Tino's Beauty Center",
      src: "http://192.168.1.5/Nehli/videos/Series/Manos%20a%20la%20obra/Manos%20a%20la%20obra%20-%205x106%20-%20Tino's%20Beauty%20Center.mp4",
      type: 'video/mp4'
    },
    {
      name: 'El Internado. Las Cumbres 1x01 Episodio 1',
      src: "http://192.168.1.5/Nehli/videos/Series/El%20Internado.%20Las%20Cumbres%20(2021)%20T1%20[AMZN%20WEB-DL%201080p%20h264%20DD+%205.1][PXL]/El%20Internado.%20Las%20Cumbres%201x01%20Episodio%201%20[AMZN%20WEB-DL%201080p%20h264%20DD+%205.1][PXL].mkv",
      type: 'video/mp4'
    },
    {
      name: 'Fear the Walking Dead 6x01 El final es el principio',
      src: "http://192.168.1.5/Nehli/videos/Series/Fear%20The%20Walking%20Dead%20T6/Fear%20the%20Walking%20Dead%206x01%20El%20final%20es%20el%20principio%20[WEB-DL%20AMZN%201080p%20h264%20Dual%20DD%202.0-5.1%20Subs][GrupoHDS].mkv",
      type: 'video/mp4'
    }
  ];

  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data;

  constructor() { }

  ngOnInit(): void { }

  videoPlayerInit(data) {
    this.data = data;

    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.videoItems[this.activeIndex];
  }

  initVdo() {
    this.data.play();
  }

  startPlaylistVdo(item, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }

}
