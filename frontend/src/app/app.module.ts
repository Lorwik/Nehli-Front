import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
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

    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,

    SharedModule,
    MyanimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
