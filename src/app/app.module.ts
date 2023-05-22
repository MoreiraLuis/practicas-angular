import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BackNotasComponent } from './back-notas/back-notas.component';
import { PerfilAlumnoComponent } from './perfil-alumno/perfil-alumno.component';
import { LoginComponent } from './login/login.component';
import { InicioAlumnoComponent } from './inicio-alumno/inicio-alumno.component';
import { AppRoutingModule } from './app-routing.module';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { UsuarioComponent } from './usuario/usuario.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    BackNotasComponent,
    PerfilAlumnoComponent,
    LoginComponent,
    InicioAlumnoComponent,
    AlumnosComponent,
    UsuarioComponent,
    MensajeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule, 
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
