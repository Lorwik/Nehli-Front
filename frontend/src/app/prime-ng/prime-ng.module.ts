import { NgModule } from '@angular/core';

// Modulos de PrimeNG
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    CardModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
