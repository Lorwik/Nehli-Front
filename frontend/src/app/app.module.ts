import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReproductorComponent } from './reproductor/reproductor.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { MyanimeModule } from './myanime/myanime.module';

@NgModule({
  declarations: [
    AppComponent,
    ReproductorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    SharedModule,
    MyanimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
