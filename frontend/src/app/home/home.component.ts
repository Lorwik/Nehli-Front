import { Component, OnInit } from '@angular/core';
import { DirVideos } from '../shared/interfaces/dirvideos.interface';
import { ListadoService } from '../shared/services/listado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private listadoService: ListadoService) { 
    this.listadoService.obtenerListados();
  }

  ngOnInit(): void {
  }

    get listarTodo() {
      return this.listadoService.videotecas;
    }

}
