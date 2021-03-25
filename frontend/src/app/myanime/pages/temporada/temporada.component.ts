import { NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MyanimeService } from '../../services/myanime.service';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styles: [
  ]
})
export class TemporadaComponent implements OnInit {

  anioActual: number = new Date().getFullYear();
  temporada: string;
  tempActual: string;
  anios: number[] = [];
  anioSeleccionado: number;

  constructor(private MyanimeService: MyanimeService) {
    this.anioSeleccionado = this.anioActual;
    this.tempActual = 'winter';
    this.MyanimeService.obtenerSeason('winter', this.anioSeleccionado);

    for (let i = this.anioActual;i > 1916; i--) {
      this.anios.push(i);
    }

  }

  ngOnInit(): void {}

  obtenerAnimesAnios(newanio:number){
    this.anioSeleccionado = newanio;
    this.MyanimeService.obtenerSeason(this.tempActual, this.anioSeleccionado);
  }

  recibirTemp(temp: string){
    this.MyanimeService.obtenerSeason(temp, this.anioSeleccionado);

    switch(temp){
      case 'winter': {
        this.temporada = 'Invierno';
        break;
      }

      case 'spring': {
        this.temporada = 'Primavera';
        break;
      }

      case 'summer': {
        this.temporada = 'Verano';
        break;
      }

      case 'fall': {
        this.temporada = 'Otoño';
        break;
      }
    }
  }

  get Temporadas() {
    return this.MyanimeService.season;
  }

}
