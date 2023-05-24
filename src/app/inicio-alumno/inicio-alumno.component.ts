import { Component, OnInit } from '@angular/core';
import { Notas } from 'src/main';
import { UsuariosService } from '../usuarios.service';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.component.html',
  styleUrls: ['./inicio-alumno.component.css']
})
export class InicioAlumnoComponent implements OnInit {

  notaUsuarios : any =[];

  getUsuarios(): void {
    this.NotasDelService.getUsuarios()    
    .subscribe(notaUsuarios => this.notaUsuarios = notaUsuarios); 
  }

  ngOnInit(): void {
    this.getUsuarios();
  }
  constructor(private NotasDelService: NotasService) {};
}
