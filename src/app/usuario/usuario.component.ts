import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Alumnos } from 'src/main';

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

  ngOnInit(): void {
    this.getUsuarios();
  }
  constructor(private UsuariosDelService: UsuariosService) {};
}
