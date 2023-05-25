import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Alumnos } from 'src/main';
import { alumnos } from '../mock-alumnos';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{
  
  listaUsuarios : any =[];

  getUsuarios(): void {
    this.UsuariosDelService.getUsuarios()    
    .subscribe(listaUsuarios => this.listaUsuarios = listaUsuarios); 
  }

  save(): void {
    this.listaUsuarios.updateHero(this.listaUsuarios)
      //.subscribe(() => this.goBack());
  }

  add(nombres: string): void {
    nombres = nombres.trim();
    if (!nombres) { return; }
    this.UsuariosDelService.addHero({ nombres } as unknown as Alumnos)
      .subscribe(alumnos => {
        this.listaUsuarios.push(alumnos);
      });
  }
  
  ngOnInit(): void {
    this.getUsuarios();
  }
  constructor(private UsuariosDelService: UsuariosService, private http: HttpClient ) {};
}
