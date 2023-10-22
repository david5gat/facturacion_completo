import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegistroComponent} from './principal/registro/registro.component';
import { IngresarComponent } from './principal/ingresar/ingresar.component';
import { ServiciosComponent } from './secundarios/servicios/servicios.component';
import { CarritoComponent } from './secundarios/carrito/carrito.component';

const routes: Routes = [
{ path: 'inicio', title: 'Iniciar', component: IngresarComponent},  
{ path: 'registro', title: 'Registro', component: RegistroComponent},
{ path: 'servicios', title:'servicios', component: ServiciosComponent},
{ path: '**', title: 'carrito', component:CarritoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
