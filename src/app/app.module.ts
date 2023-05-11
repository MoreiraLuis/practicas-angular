import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackNotasComponent } from './back-notas/back-notas.component';
import { PerfilAlumnoComponent } from './perfil-alumno/perfil-alumno.component';
import { LoginComponent } from './login/login.component';
import { InicioAlumnoComponent } from './inicio-alumno/inicio-alumno.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BackNotasComponent,
    PerfilAlumnoComponent,
    LoginComponent,
    InicioAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
