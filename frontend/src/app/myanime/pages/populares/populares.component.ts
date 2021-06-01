import { Component, OnInit } from '@angular/core';
import { MyanimeService } from '../../services/myanime.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styles: [
    `
      a {
        text-decoration:none;
        text-align: center;
      }
    `
  ]
})
export class PopularesComponent implements OnInit {

  constructor(private MyanimeService: MyanimeService) { 
    this.MyanimeService.obtenerPopulares();
  }

  ngOnInit(): void {
  }

  get Populares() {
    return this.MyanimeService.populares;
  }

}
