import { Component, OnInit } from '@angular/core';
import { MyanimeService } from '../../services/myanime.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styles: [
    `
    .botones {
      cursor: pointer;
    }
    `
  ]
})
export class GenerosComponent implements OnInit {

  generos: string[] = [
    "Acción",
    "Aventuras",
    "Carreras",
    "Comedia",
    "Demencia",
    "Demonios",
    "Misterio",
    "Drama",
    "Ecchi",
    "Fantasia",
    "Juegos",
    "Hentai",
    "Historia",
    "Terror",
    "Infantil",
    "Magia",
    "Artes Marciales",
    "Mechas",
    "Música",
    "Parodias",
    "Samurai",
    "Romance",
    "Escolares",
    "Ciencia Ficción",
    "Shoujo",
    "Shoujo Ai",
    "Shounen",
    "Shounen Ai",
    "Espacio",
    "Deportes",
    "Super Poderes",
    "Vampiros",
    "Yaoi",
    "Yuri",
    "Harem",
    "Recuentos de la vida",
    "Sobrenatural",
    "Militar",
    "Policia",
    "Psicológico",
    "Thriller",
    "Seinen",
    "Josei"
  ]

  generoActual: string;
  nGeneroActual: number;
  paginaActual: number;

  constructor(private MyanimeService: MyanimeService) {
    this.paginaActual = 1;
    this.nGeneroActual = 1;
    this.generoActual = this.generos[this.nGeneroActual - 1];
    this.MyanimeService.obtenerGeneros(this.nGeneroActual, this.paginaActual);
  }

  ngOnInit(): void {
  }

  dameGenero(genero: number) {
    this.paginaActual = 1;
    this.nGeneroActual = genero;
    this.generoActual = this.generos[genero - 1];
    this.MyanimeService.obtenerGeneros(genero, this.paginaActual);
  }

  get Generos() {
    return this.MyanimeService.generosAnime;
  }

  get PagGenero(){
    return (this.MyanimeService.pagGeneros / 100);
  }

  cambioPagina(avanzar: boolean) {
    if (avanzar) {
      if (this.paginaActual != this.PagGenero) {
        this.paginaActual += 1;
      }

    } else {
      if (this.paginaActual > 1) {
        this.paginaActual -= 1;

      }
    }

    this.MyanimeService.obtenerGeneros(this.nGeneroActual, this.paginaActual);
  }

  especificarPagina(numero: number){

    this.MyanimeService.obtenerGeneros(this.nGeneroActual, numero);

    this.paginaActual = numero;

  }

}
