import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error/error.component';
import { HomeComponent } from './home/home/home.component';
import { JuegosComponent } from './juegos/juegos/juegos.component';
import { MemotestComponent } from './juegos/memotest/memotest.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
{path:"login", component:LoginComponent},
{path:"home", component:HomeComponent},
{path:"", redirectTo:"/home", pathMatch:"full"},
{path:"**", component:ErrorComponent},
// {path:"juegos", component:JuegosComponent},
// {path:"juegos/memo", component:MemotestComponent},
// {path:"juegos/tateti", component:TatetiComponent},
// {path:"juegos/preguntados", component:PreguntadosComponent},
{path:"juegos", component:JuegosComponent,
children:[
  {path:"memo", component:MemotestComponent},
  {path:"tateti", component:TatetiComponent},
  {path:"preguntados", component:PreguntadosComponent}
]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
