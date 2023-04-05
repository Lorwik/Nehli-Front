import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Datum, Welcome } from '../interfaces/anime.interface';
import { Generos, Animu} from '../interfaces/generos.interface';

@Injectable({
  providedIn: 'root'
})
export class MyanimeService {

  private servicioURL: string = "https://api.jikan.moe/v4";

  public populares: Datum[] = [];
  public season: Datum[] = [];
  public pagGeneros!: number;
  public generosAnime: Animu[] = [];

  constructor(private http: HttpClient) { }

  obtenerPopulares() {
    this.http.get<Welcome>(`${this.servicioURL}/top/anime`)
        .subscribe((resp) => {
          console.log(resp);
          this.populares = resp.data;
        });

  }

  obtenerSeason(temporada: string, anio: number){
    this.http.get<Welcome>(`${this.servicioURL}/seasons/${anio}/${temporada}`)
      .subscribe((resp) => {
        this.season = resp.data;
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
