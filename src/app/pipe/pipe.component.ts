import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  titulos:string = 'Hola soy un título'
  dinero:number = 2400
  ganancias:number = 0.54

  fechaNacimiento: Date = new Date('01/02/1997')

  textoLargo:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum maximus risus ac dictum. Fusce tincidunt dui vitae magna pellentesque, eu vehicula justo vestibulum. Etiam malesuada metus ut interdum commodo. Nullam congue vulputate ipsum ac mollis. Proin urna nunc, consectetur a tristique a, convallis sed tellus.'

  constructor() { }

  ngOnInit(): void {
  }


}
