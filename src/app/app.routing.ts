import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
//Aqui van todos los componentes que queremos dibujar dentro de la zona de rutas
import { HomeComponent } from './components/rutas/home/home.component';
import { CineComponent } from './components/rutas/cine/cine.component';
import { MusicaComponent } from './components/rutas/musica/musica.component';
import { TelevisionComponent } from './components/rutas/television/television.component';
import { Error404Component } from './components/rutas/error404/error404.component';
import { NumeroDobleComponent } from './components/numerodoble/numerodoble.component';
//Creamos un array de Rutas
//Las rutas llevan implicita la barra "/", asi que no hay que ponerlas si son desde la raiz
//{path:"cine", component: CineComponent}
//Si es una dentro de otra, se hace el path completo. Es decir:
//{path:"cine/crearPelicula", component: CineComponent}

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'cine', component: CineComponent },
  { path: 'tele', component: TelevisionComponent },
  { path: 'numerodoble', component: NumeroDobleComponent },
  { path: 'numerodoble/:numero', component: NumeroDobleComponent },

  //para controlar el 404, lo indicamos SIEMPRE como la ultima ruta. el path es '**'
  { path: '**', component: Error404Component },
];

//Para poder usar esta clase con sus import integrados dentro de modules,
//Hay que indicar que es un proveedor de rutas y decirle qué rutas tenemos: appRoutes
//Esto son nombres de variables para llamarlas desde module.ts
export const appRoutingProviders: /*Este es el nombre que se suele usar, pero es inventado x nosotros*/ any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
