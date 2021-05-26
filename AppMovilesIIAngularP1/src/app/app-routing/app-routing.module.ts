import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcercaComponent } from '../pages/acerca/acerca.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { InicioComponent } from '../pages/inicio/inicio.component';
import { ErrorComponent } from '../pages/error/error.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'acerca',
    component: AcercaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '',
    redirectTo: 'inicio',pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: 'error'
  },
  

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
