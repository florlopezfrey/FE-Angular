import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbmArticulosComponent } from './abm-articulos/abm-articulos.component';
import { FormValidacionComponent } from './form-validacion/form-validacion.component';
import { DadoComponent } from './dado/dado.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';


const routes: Routes = [
  {
    path: '',
    component: AbmArticulosComponent
  },
  {
    path: 'abm-articulos',
    component: AbmArticulosComponent
  },
  {
    path: 'form-validacion',
    component: FormValidacionComponent
  },
  {
    path: 'dado',
    component: DadoComponent
  },
  {
    path: 'form-reactive',
    component: ReactiveComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'dado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
