import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularesComponent } from './myanime/pages/populares/populares.component';
import { TemporadaComponent } from './myanime/pages/temporada/temporada.component';

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
    path: 'temporada:temp',
    component: TemporadaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
