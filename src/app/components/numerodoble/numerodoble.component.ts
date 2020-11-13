import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css'],
})
export class NumeroDobleComponent implements OnInit {
  public numero: number;
  public doble: number;
  //Hay que inyectar los dos objetos para recuperar rutas, o sea:
  //ActivatedRoute (para la ruta activada) y Router.
  //En la inyeccion se declaran como private
  constructor(private _activeRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    //En OnInit tenemos que subscribirnos al parametro, para poder recibirlo
    //Dentro de PARAMS vendran los parametros con su :name
    this._activeRoute.params.subscribe((params: Params) => {
      console.log(params);
      //Comprobamos que hay parametros
      //TODOS los parametros son String
      if (params.numero != null) {
        this.numero = parseInt(params.numero);
        this.doble = this.numero * 2;
      } else {
        console.log('No hay parametros');
      }
    });
  }
}
