import { Component, OnInit } from '@angular/core';
import { Alumnos } from 'src/main';
//import { alumnos } from '../mock-alumnos';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  Alumnos : any =[];

   getUsuarios(): void {
    this.UsuariosDelService.getUsuarios()    
    .subscribe(Alumnos => this.Alumnos = this.Alumnos);
    
  }

  ngOnInit() {
    this.getUsuarios();
  }

  constructor(private UsuariosDelService: UsuariosService) {};
}
