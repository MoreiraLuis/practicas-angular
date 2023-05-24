import { Injectable } from '@angular/core';
//import { alumnos } from './mock-alumnos';
import { Observable, of } from 'rxjs';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { Alumnos, Notas } from 'src/main';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  
  private notasUrl = 'api/notasDb';  // URL de la API 

  private log(message: string) {
    this.mensajeService.add(`NotasService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error);
  
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  getUsuarios(): Observable<Notas[]> {
    //cambio de local a llamada HTTP

    //const listaObservabledeUsuarios = of(Alumnos);

    //servicio de mensajes
    //this.mensajeService.add('Mensaje: Hemos recuperado los alumnos2');
    //return listaObservabledeUsuarios;
    return this.http.get<Notas[]>(this.notasUrl)
    .pipe(
      tap(_ => this.log('¡Base de datos inicializada!')),
      catchError(this.handleError<Notas[]>('getUsuarios', []))
    );
  }

  searchAlumnos(term: string): Observable<Notas[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Notas[]>(`${this.notasUrl}/?nombres=${term}`).pipe(
      tap(x => x.length ?
         this.log(`Se encontraron alumnos con: "${term}"`) :
         this.log(`La búsqueda no ha duelto resultados con "${term}"`)),
      catchError(this.handleError<Notas[]>('searchAlumnos', []))
    );
  }
  
  constructor(private http: HttpClient, private mensajeService: MensajeService) { }
}
