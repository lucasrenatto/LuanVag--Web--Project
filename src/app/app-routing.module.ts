import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {PedivenComponent} from './views/pediven/pediven.component';
import {MedicamentosComponent} from './views/medicamentos/medicamentos.component';
import {LotesComponent} from './views/lotes/lotes.component';
import {PrincipioComponent} from './views/principio/principio.component';
import {ClientesComponent} from './views/clientes/clientes.component';
import {LabComponent} from './views/lab/lab.component';

const routes: Routes = [
  {
  path:"",
  component : HomeComponent
  },
  {
  path:"venda",
  component : PedivenComponent
  },
  {
    path:"medicamentos",
    component : MedicamentosComponent
  },
  {
    path:"lotes",
    component : LotesComponent
  },
  {
    path:"principios",
    component : PrincipioComponent
  },
  {
    path:"clientes",
    component : ClientesComponent
  },
  {
    path:"lab",
    component : LabComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
