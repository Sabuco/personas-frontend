import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { InsertarComponent } from './Persona/insertar/insertar.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'editar', component:EditarComponent},
  {path:'insertar', component:InsertarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
