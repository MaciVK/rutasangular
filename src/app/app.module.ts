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

@NgModule({
  declarations: [
    AppComponent,
    Tablamultiplicar,
    CineComponent,
    HomeComponent,
    MusicaComponent,
    TelevisionComponent,
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
