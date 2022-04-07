import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { PedivenComponent } from './views/pediven/pediven.component';
import { MedicamentosComponent } from './views/medicamentos/medicamentos.component';
import { LotesComponent } from './views/lotes/lotes.component';
import { PrincipioComponent } from './views/principio/principio.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { LabComponent } from './views/lab/lab.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { NovopedidoComponent } from './components/novopedido/novopedido.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NovoremedioComponent } from './components/novoremedio/novoremedio.component';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PedivenComponent,
    MedicamentosComponent,
    LotesComponent,
    PrincipioComponent,
    ClientesComponent,
    LabComponent,
    NovopedidoComponent,
    NovoremedioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
