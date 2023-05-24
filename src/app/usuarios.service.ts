import { Injectable } from '@angular/core';
//import { alumnos } from './mock-alumnos';
import { Observable, of } from 'rxjs';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { Alumnos } from 'src/main';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  private usuariosUrl = 'api/usuariosDb';  // URL de la API
  
  private log(message: string) {
    this.mensajeService.add(`UsuariosService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  getUsuarios(): Observable<Alumnos[]> {
    //cambio de local a llamada HTTP

    //const listaObservabledeUsuarios = of(Alumnos);

    //servicio de mensajes
    //this.mensajeService.add('Mensaje: Hemos recuperado los alumnos2');
    //return listaObservabledeUsuarios;
    return this.http.get<Alumnos[]>(this.usuariosUrl)
    .pipe(
      tap(_ => this.log('¡Base de datos inicializada!')),
      catchError(this.handleError<Alumnos[]>('getUsuarios', []))
    );
  }

  searchAlumnos(term: string): Observable<Alumnos[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Alumnos[]>(`${this.usuariosUrl}/?nombres=${term}`).pipe(
      tap(x => x.length ?
         this.log(`Se encontraron alumnos con: "${term}"`) :
         this.log(`La búsqueda no ha duelto resultados con "${term}"`)),
      catchError(this.handleError<Alumnos[]>('searchAlumnos', []))
    );
  }
  
  constructor(private http: HttpClient, private mensajeService: MensajeService) { }
}
