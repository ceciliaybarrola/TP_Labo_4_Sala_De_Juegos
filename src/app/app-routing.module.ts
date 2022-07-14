import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error/error.component';
import { BienvenidosComponent } from './home/bienvenidos/bienvenidos.component';
import { HomeComponent } from './home/home/home.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { JuegosComponent } from './juegos/juegos/juegos.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './login/registro/registro.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes = [
{path:"login", component:LoginComponent},
{path:"registro", component:RegistroComponent},
// {path:"home", component:HomeComponent},
{path:"home", component:BienvenidosComponent},
{path:"", redirectTo:"/home", pathMatch:"full"},
// {path:"juegos", component:JuegosComponent},
// {path:"juegos/memo", component:MemotestComponent},
// {path:"juegos/tateti", component:TatetiComponent},
// {path:"juegos/preguntados", component:PreguntadosComponent},
{path:"juegos", component:JuegosComponent,
children:[
  {path:"mayorMenor", component:MayorMenorComponent},
  {path:"ahorcado", component:AhorcadoComponent},
  {path:"preguntados", component:PreguntadosComponent}
]},
{path:"quienSoy", component:QuienSoyComponent},
{path:"**", component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
