import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListadoService } from '../shared/services/listado.service';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  idDir: number;
  idVid: number;

  videoItems = [
    {
      name: '',
      src: '',
      type: '',
      miniatura: '',
      tipo: ''
    }
  ];

  activeIndex = 0;
  currentVideo = this.videoItems[this.activeIndex];
  data;

  constructor(private rutaActiva: ActivatedRoute, private listadoService: ListadoService) { 
    this.idDir = this.rutaActiva.snapshot.params.iddir
    this.idVid = this.rutaActiva.snapshot.params.idvid

    this.listadoService.obtenerListados();

    console.log(this.listadoService.videotecas[this.idDir].dir[this.idVid].directorio);

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
    
    console.log(this.videoItems);

  }

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
