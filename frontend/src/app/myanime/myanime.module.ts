import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyanimeService } from './services/myanime.service';
import { PopularesComponent } from './pages/populares/populares.component';
import { TemporadaComponent } from './pages/temporada/temporada.component';
import { GenerosComponent } from './pages/generos/generos.component';



@NgModule({
  declarations: [
    PopularesComponent,
    TemporadaComponent,
    GenerosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopularesComponent
  ],
  providers: [MyanimeService],
})
export class MyanimeModule { }
