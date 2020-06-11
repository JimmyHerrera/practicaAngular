import { Component, OnInit } from '@angular/core';

interface Producto{
  nombre:string;
  stock:number;
  fabricante:string;
  fechaVencimiento:Date;
  esImportante:boolean;
  textoGrande:boolean;
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  cargando:boolean = true
  nombres:Array<string> = ['Maria','Juan','Pedro']
  pestana:string = ''
  productos:Array<Producto> = [
    {
      nombre: 'Arroz',
      stock: 15,
      fabricante: 'Distribuidor Industrial',
      fechaVencimiento: new Date('07/15/2020'),
      esImportante:true,
      textoGrande:true
    },
    {
      nombre: 'Azúcar',
      stock: 20,
      fabricante: 'Distribuidor Azucarero',
      fechaVencimiento: new Date('06/15/2020'),
      esImportante:false,
      textoGrande:true
    },
    {
      nombre: 'Refresco',
      stock: 200,
      fabricante: 'Coca Cola',
      fechaVencimiento: new Date('07/15/2021'),
      esImportante:true,
      textoGrande:false
    },
  ]

  mostrarCuadrado:boolean = false

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.cargando = false;
    }, 5000);
  }

  alternar(){
    this.cargando = !this.cargando;
  }

  cambiarPestana(pestana:string){
    this.pestana = pestana;
  }

  alternarFondo(){
    this.mostrarCuadrado = !this.mostrarCuadrado;
  }


}

