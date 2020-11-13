import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Tablamultiplicar } from './components/tablamultiplicar/tablamultiplicar.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { HomeComponent } from './components/rutas/home/home.component';
import { MusicaComponent } from './components/rutas/musica/musica.component';
import { TelevisionComponent } from './components/rutas/television/television.component';
import { routing, appRoutingProviders } from './app.routing';
import { MenuComponent } from './components/rutas/menu/menu.component';
import { Error404Component } from './components/rutas/error404/error404.component';
import { NumeroDobleComponent } from './components/numerodoble/numerodoble.component';

@NgModule({
  declarations: [
    AppComponent,
    Tablamultiplicar,
    CineComponent,
    HomeComponent,
    MusicaComponent,
    TelevisionComponent,
    MenuComponent,
    Error404Component,
    NumeroDobleComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
