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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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
      return of([]);
    }
    return this.http.get<Alumnos[]>(`${this.usuariosUrl}/?nombres=${term}`).pipe(
      tap(x => x.length ?
         this.log(`Se encontraron alumnos con: "${term}"`) :
         this.log(`La búsqueda no ha duelto resultados con "${term}"`)),
      catchError(this.handleError<Alumnos[]>('searchAlumnos', []))
    );
  }
  
  addHero(alumnos: Alumnos): Observable<Alumnos> {
    return this.http.post<Alumnos>(this.usuariosUrl, alumnos, this.httpOptions).pipe(
      tap((alumnos: Alumnos) => this.log(`Alumno añadido con ID: ${alumnos.id}`)),
      catchError(this.handleError<Alumnos>('addHero'))
    );
  }

  updateHero(alumnos: Alumnos): Observable<any> {
  return this.http.put(this.usuariosUrl, alumnos, this.httpOptions).pipe(
    tap(_ => this.log(`Alumno actualizado con ID: ${alumnos.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}
  
  constructor(private http: HttpClient, private mensajeService: MensajeService) { }
}
