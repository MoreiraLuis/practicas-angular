import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { Alumnos } from 'src/main';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: [ './busqueda.component.css' ]
})
export class BusquedaComponent implements OnInit {
  listaUsuarios$!: Observable<Alumnos[]>;
  private searchTerms = new Subject<string>();

  constructor(private UsuariosService: UsuariosService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.listaUsuarios$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.UsuariosService.searchAlumnos(term)),
    );
  }
}