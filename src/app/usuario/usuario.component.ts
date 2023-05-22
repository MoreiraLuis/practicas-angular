import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  listaUsuarios : any =[];
  
  getUsuarios(): void {
    this.UsuariosDelService.getUsuarios()    
    .subscribe(listaUsuarios => this.listaUsuarios = this.listaUsuarios);
    
  }

  ngOnInit(): void {
    this.getUsuarios();
  }
  constructor(private UsuariosDelService: UsuariosService) {};
}
