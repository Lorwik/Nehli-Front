import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListadoService } from '../shared/services/listado.service';
import { videoItem } from '../shared/interfaces/videoitems.interface';
import videojs from 'video.js';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: [
    './reproductor.component.css'
]
})
export class ReproductorComponent implements OnInit, OnDestroy {
  idDir: number;
  idVid: number;

  videoItems: videoItem[];

  activeIndex = 0;
  currentVideo: videoItem;

  //Variables del reproductor
  player!: videojs.Player;
  options: any;

  constructor(private rutaActiva: ActivatedRoute, private listadoService: ListadoService, private elementRef: ElementRef) { 

    this.videoItems = new Array<videoItem>();

    //obtenemos los datos de la URL:
    this.idDir = this.rutaActiva.snapshot.params.iddir
    this.idVid = this.rutaActiva.snapshot.params.idvid

    //Obtenemos el listado de videos de la carpeta
    this.listadoService.obtenerListados();

    for (let i = 0; i < this.listadoService.videotecas[this.idDir].dir[this.idVid].video.length; i++){

      this.videoItems.push(
        {
          name: this.listadoService.videotecas[this.idDir].dir[this.idVid].directorio,
          src: this.listadoService.videotecas[this.idDir].dir[this.idVid].directorio  + '/' + this.listadoService.videotecas[this.idDir].dir[this.idVid].video[i],
          type: 'video/mp4',
          miniatura: this.listadoService.videotecas[this.idDir].dir[this.idVid].miniatura,
          tipo: this.listadoService.videotecas[this.idDir].tipo
        }
      );

    }
    
    this.currentVideo = this.videoItems[this.activeIndex];

    console.log(this.videoItems);

    this.options = {
      controls: true,
      autoplay: true,
      'sources': [{
        'src': this.videoItems[this.activeIndex].src,
        'type': this.videoItems[this.activeIndex].type
      }]
    };
  }

  ngOnInit(): void {
    this.player = videojs("my-player", this.options, function onPlayerReady() {});
    //this.playVideo(this.currentVideo[this.activeIndex],this.activeIndex);
   }

   ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

  playVideo(item: videoItem, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;

    this.player.src({ src: this.videoItems[this.activeIndex].src, type: this.videoItems[this.activeIndex].type});

    // var sourceTag = document.createElement('source');
    // sourceTag.setAttribute('src', this.videoItems[this.activeIndex].src);
    // sourceTag.setAttribute('type', this.videoItems[this.activeIndex].type);
    // document.getElementById('oaf_html5_api').appendChild(sourceTag);
    
  }

}