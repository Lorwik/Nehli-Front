import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DirVideos } from '../interfaces/dirvideos.interface';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  url='http://192.168.1.5/ngNehli/';
  //url='/ngNehli/';

  constructor(private http: HttpClient) { }

  public videotecas: DirVideos[] = [];


  obtenerListados() {
     return this.http.get<DirVideos[]>(`${this.url}funciones.php`)
     .subscribe((resp) => {
       console.log(resp);
       this.videotecas = resp;
     });
   }

}
