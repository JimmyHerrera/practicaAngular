import { Component, OnInit } from '@angular/core';

class Producto{
  nombre:string;
  marca:string;
  stock:boolean;

  constructor(){
    this.nombre =this.nombre;
    this.marca = this.marca;
    this.stock = this.stock;
  }
}

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrls: ['./ejemplo2.component.css']
})
export class Ejemplo2Component implements OnInit {

  producto:Producto = new Producto();
  listadoProductos: Array<Producto> = new Array<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  agregar(){
    this.listadoProductos.push({
      nombre:this.producto.nombre,
      marca:this.producto.marca,
      stock:this.producto.stock
    })
    this.producto.nombre = '';
    this.producto.marca = '';
    this.producto.stock = false; 

  }





}
