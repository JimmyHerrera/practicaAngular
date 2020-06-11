import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitulosComponent } from './titulos/titulos.component'
import { PipeComponent } from './pipe/pipe.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { PaginaErrorpagina404Component } from './pagina-errorpagina404/pagina-errorpagina404.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

const routes: Routes = [
  {  path: '', component: TitulosComponent  },
  {  path: 'pipes', component: PipeComponent },
  {  path: 'ejemplo', component:EjemploComponent },
  {  path: 'directiva', component:DirectivaComponent },
  {  path: 'ejemplo2', component:Ejemplo2Component },
  {  path: 'usuario', component:UsuarioComponent, children:[
      {  path: 'agregar', component:AgregarUsuarioComponent },
      {  path: 'editar', component:EditarUsuarioComponent }
    ]
  },
  {  path: 'articulo', component:ArticuloComponent  },
  {  path: 'articuloDetalle', component:ArticuloDetalleComponent},
  {  path: '**', component:PaginaErrorpagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
