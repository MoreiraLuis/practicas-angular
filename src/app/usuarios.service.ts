import { Injectable } from '@angular/core';
import { alumnos } from './mock-alumnos';
import { Observable, of } from 'rxjs';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { Alumnos } from 'src/main';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  private usuariosUrl = 'api/usuarios';  // URL de la API
  
  private log(message: string) {
    this.mensajeService.add(`UsuariosService: ${message}`);
  }
  
  getUsuarios(): Observable<Alumnos[]> {
    //cambio de local a llamada HTTP

    //const listaObservabledeUsuarios = of(alumnos);

    //servicio de mensajes
    this.mensajeService.add('Mensaje: Hemos recuperado los alumnos');
    //return listaObservabledeUsuarios;
    return this.http.get<Alumnos[]>(this.usuariosUrl)
  }
  constructor(private http: HttpClient, private mensajeService: MensajeService) { }
}
