import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { VentasComponent } from './componentes/ventas/ventas.component';


const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'clientes', component: ClienteComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'ventas', component: VentasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
   
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }