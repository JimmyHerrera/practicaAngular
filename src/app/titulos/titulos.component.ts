import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  nombre:string = 'Jimmy'
  apellido:string = 'Herrera'
  alumno:any = {
    nombre: 'Agatha',
    apellido: 'Cerdán',
    edad: 23
  }

  imagen:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOhFLU4mzkx_hQLXGZylob81I6g46PvS6XcdN5kEpW7ymTHUe-&usqp=CAU'
  inputNuevo:string = 'Hola soy un input'

  correo:string = ''
  password:string = ''


  constructor() { }

  ngOnInit(): void {
  }

  ingresar(evento){
    if(evento.key == "Enter"){
      console.log('Ingresando al sistema')
    }

  }

  llamarAlert(){
    alert('Ha hecho doble clic')
  }

  escribirModelo(){
    console.log(this.password)
  }

  escribirCorreo(){
    this.password = this.correo
    console.log(this.correo)
    console.log('La contraseña es: ', this.password)

  }

  escribir(valor:string){
    console.log(valor)
  }

  colorearFondo(evento){
    evento.srcElement.style.background = "red"
    evento.srcElement.style.width = "200px"
  }

  cambiarTamano(evento){
    evento.srcElement.style.width = "500px"
    evento.srcElement.style.heigth = "200px"
  }

  incrementarTamano(evento){
    evento.srcElement.style.width = "800px"
    evento.srcElement.style.heigth = "400px"
  }
}
