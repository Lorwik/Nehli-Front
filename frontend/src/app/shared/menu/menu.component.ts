import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      .img-logo {
        width: 100px;
        height: 50px;
      }
    `
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-cog',
        routerLink: '/'
      },
      {
        label: 'Seguimiento de Anime',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Populares',
            icon: 'pi pi-align-left',
            routerLink: 'populares'
          },
          {
            label: 'Temporada',
            icon: 'pi pi-dollar',
            routerLink: 'temporada'
          },
          {
            label: 'Genero',
            icon: 'pi pi-globe',
            routerLink: 'generos'
          },
        ]
      },
      {
        label: 'Enlaces de interes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'FilmAffinity',
            icon: 'pi pi-align-left',
          },
          {
            label: 'MyAnimeList',
            icon: 'pi pi-dollar',
          },
          {
            label: 'YouTube',
            icon: 'pi pi-globe',
          },
        ]
      },
    ];
  }

}
