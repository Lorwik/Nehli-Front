import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ImagenPipe } from './pipes/imagen.pipe';


@NgModule({
  declarations: [
    MenuComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
    ImagenPipe
  ]
})
export class SharedModule { }
