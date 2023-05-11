import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PerfilAlumnoComponent } from './perfil-alumno/perfil-alumno.component';
import { InicioAlumnoComponent } from './inicio-alumno/inicio-alumno.component';
import { BackNotasComponent } from './back-notas/back-notas.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'perfil', component: PerfilAlumnoComponent},
  { path: 'inicio', component: InicioAlumnoComponent},
  { path: 'back', component: BackNotasComponent},
];

@NgModule({
   imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
