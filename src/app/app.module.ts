import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ErrorComponent } from './error/error/error.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { JuegosComponent } from './juegos/juegos/juegos.component';
import { MemotestComponent } from './juegos/memotest/memotest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    TatetiComponent,
    PreguntadosComponent,
    JuegosComponent,
    MemotestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
