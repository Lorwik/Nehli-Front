import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Populares, Top } from '../interfaces/populares.interface';
import { Season, Anime } from '../interfaces/season.interface';

@Injectable({
  providedIn: 'root'
})
export class MyanimeService {

  private servicioURL: string = "https://api.jikan.moe/v3";

  public populares: Top[] = [];
  public season: Anime[] = [];

  constructor(private http: HttpClient) { }

  obtenerPopulares() {

    this.http.get<Populares>(`${this.servicioURL}/top/anime/1/bypopularity`)
        .subscribe((resp) => {
          this.populares = resp.top;
        });

  }

  obtenerSeason(temporada: string, anio: number){
    this.http.get<Season>(`${this.servicioURL}/season/${anio}/${temporada}`)
      .subscribe((resp) => {
        console.log(resp.anime);
        this.season = resp.anime;
      });
  }
}
