import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyanimeService } from './services/myanime.service';
import { PopularesComponent } from './pages/populares/populares.component';
import { TemporadaComponent } from './pages/temporada/temporada.component';
import { GenerosComponent } from './pages/generos/generos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DropdownModule } from 'primeng/dropdown';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';


@NgModule({
  declarations: [
    PopularesComponent,
    TemporadaComponent,
    GenerosComponent,
    TarjetasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    DropdownModule
  ],
  exports: [
    PopularesComponent,
  ],
  providers: [MyanimeService],
})
export class MyanimeModule { }
