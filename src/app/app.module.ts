import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ResumenComponent } from './resumen/resumen.component';
import { ContenedorComponent } from './contenedor/contenedor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuentaComponent,
    ResumenComponent,
    ContenedorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
