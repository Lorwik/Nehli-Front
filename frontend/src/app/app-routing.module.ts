import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularesComponent } from './myanime/pages/populares/populares.component';
import { TemporadaComponent } from './myanime/pages/temporada/temporada.component';
import { GenerosComponent } from './myanime/pages/generos/generos.component';
import { ReproductorComponent } from './reproductor/reproductor.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'animespopulares',
    component: PopularesComponent
  },
  {
    path: 'temporada',
    component: TemporadaComponent
  },
  {
    path: 'generos',
    component: GenerosComponent
  },
  {
    path: 'reproductor/:iddir/:idvid',
    component: ReproductorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
