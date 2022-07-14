import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ErrorComponent } from './error/error/error.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { JuegosComponent } from './juegos/juegos/juegos.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { RegistroComponent } from './login/registro/registro.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { BienvenidosComponent } from './home/bienvenidos/bienvenidos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    JuegosComponent,
    QuienSoyComponent,
    RegistroComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    AhorcadoComponent,
    BienvenidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
