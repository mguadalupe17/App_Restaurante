import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { CartaComponent } from './componentes/Carta/carta/carta.component';
import { PedidosComponent } from './componentes/Pedidos/pedidos/pedidos.component';
import { FormularioComponent } from './componentes/Formulario/formulario/formulario.component';
import { HomeComponent } from './componentes/Home/home/home.component';
const rutas: Routes = [
  { path: 'carta', component: CartaComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CartaComponent,
    PedidosComponent,
    FormularioComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
