import { Injectable } from '@angular/core';
import { alumnos } from './mock-alumnos';
import { Observable, of } from 'rxjs';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { Alumnos } from 'src/main';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  getUsuarios(): Observable<Alumnos[]> {
  const listaObservabledeUsuarios = of(alumnos);

  //servicio de mensajes
  this.mensajeService.add('Mensaje: Hemos recuperado los alumnos');
  return listaObservabledeUsuarios;  
  }
  constructor(private mensajeService: MensajeService) { }
}
