import { NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyanimeService } from '../../../../services/myanime.service';

@Component({
  selector: 'app-temporada',
  templateUrl: './temporada.component.html',
  styleUrls: [ './temporada.component.css' ]
})
export class TemporadaComponent implements OnInit {

  anioActual: number = new Date().getFullYear();
  temporada!: string;
  tempActual: string;
  anios: number[] = [];
  anioSeleccionado: number;

  selected: FormControl = new FormControl(null);
  opc: any;

  constructor(private MyanimeService: MyanimeService) {
    this.anioSeleccionado = this.anioActual;
    this.tempActual = 'winter';
    this.MyanimeService.obtenerSeason('winter', this.anioSeleccionado);

    for (let i = this.anioActual;i > 1916; i--) {
      this.anios.push(i);
    }

  }

  ngOnInit(): void {
    this.selected.valueChanges.subscribe(changes => {
      this.obtenerAnimesAnios();
    });
  }

  obtenerAnimesAnios(){
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
