import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { FormsModule } from '@angular/forms';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';
import { PipeComponent } from './pipe/pipe.component';
import { ContinuaraPipe } from './continuara.pipe';
import { PaginaErrorpagina404Component } from './pagina-errorpagina404/pagina-errorpagina404.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { AgregarUsuarioComponent } from './usuario/agregar-usuario/agregar-usuario.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component'

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    DirectivaComponent,
    EjemploComponent,
    Ejemplo2Component,
    PipeComponent,
    ContinuaraPipe,
    PaginaErrorpagina404Component,
    EncabezadoComponent,
    UsuarioComponent,
    EditarUsuarioComponent,
    AgregarUsuarioComponent,
    ArticuloComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
