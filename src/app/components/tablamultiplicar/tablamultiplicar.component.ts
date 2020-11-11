import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css'],
})
export class Tablamultiplicar implements OnInit {
  public numero: number;
  public arrayResultados: Array<number>;
  @ViewChild('cajaNumero') cajaNumero: ElementRef;
  constructor() {
    this.arrayResultados = [];
  }
  generarTabla() {
    this.arrayResultados = [];
    this.numero = parseInt(this.cajaNumero.nativeElement.value);
    for (var i = 1; i <= 10; i++) {
      var resultado = this.numero * i;
      this.arrayResultados.push(resultado);
    }
  }
  ngOnInit(): void {}
}
