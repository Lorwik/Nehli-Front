import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Populares, Top } from '../interfaces/populares.interface';
import { Season, Anime } from '../interfaces/season.interface';
import { Generos, Animu} from '../interfaces/generos.interface';

@Injectable({
  providedIn: 'root'
})
export class MyanimeService {

  private servicioURL: string = "https://api.jikan.moe/v3";

  public populares: Top[] = [];
  public season: Anime[] = [];
  public pagGeneros!: number;
  public generosAnime: Animu[] = [];

  constructor(private http: HttpClient) { }

  obtenerPopulares() {
    this.http.get<Populares>(`${this.servicioURL}/top/anime/1/bypopularity`)
        .subscribe((resp) => {
          console.log(resp);
          this.populares = resp.top;
        });

  }

  obtenerSeason(temporada: string, anio: number){
    this.http.get<Season>(`${this.servicioURL}/season/${anio}/${temporada}`)
      .subscribe((resp) => {
        this.season = resp.anime;
      });
  }

  obtenerGeneros(genero: number, paginacion: number){
    this.http.get<Generos>(`${this.servicioURL}/genre/anime/${genero}/${paginacion}`)
    .subscribe((resp) => {
      this.generosAnime = resp.anime;
      this.pagGeneros = resp.item_count;
    });
  }
}
