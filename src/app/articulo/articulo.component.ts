import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();

  constructor(private ruta:Router) { }

  ngOnInit() {
    this.articulos.push(
      {
        nombre: 'Televisor de 24 pulgadas',
        descripcion: 'marca Dell con 4 años de garantía',
        stock:20,
        precio:1500,
        precioMayorista: 1450
      },
      {
        nombre: 'Radio tv de 24 pulgadas',
        descripcion: 'marca Samsung con 4 años de garantía',
        stock:25,
        precio:1500,
        precioMayorista: 1480
      },
      {
        nombre: 'Monitor de 24 pulgadas',
        descripcion: 'marca Asus con 4 años de garantía',
        stock:35,
        precio:2500,
        precioMayorista: 2450
      },
      {
        nombre: 'Mouse óptico',
        descripcion: 'marca Alienware con 4 años de garantía',
        stock:36,
        precio:250,
        precioMayorista: 150
      }

      )
  }

  pasarParametro(articuloRecibido:Articulo){
    this.ruta.navigate(['articuloDetalle',{articulo:JSON.stringify(articuloRecibido)}])
  }

}
