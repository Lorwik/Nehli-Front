import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DirVideos } from '../interfaces/dirvideos.interface';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  url='http://192.168.1.5/ngNehli/back/';

  constructor(private http: HttpClient) { }

  public directorios: DirVideos[] = [];

  obtenerListados() {
     return this.http.get<DirVideos>(`${this.url}funciones.php`)
     .subscribe((resp) => {
       console.log(resp);

     });
   }

}
