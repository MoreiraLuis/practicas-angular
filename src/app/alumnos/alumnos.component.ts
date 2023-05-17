import { Component, OnInit } from '@angular/core';
//import { Alumnos } from 'src/main';
import { alumnos } from '../mock-alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  Alumnos = alumnos;


  constructor() { }

  ngOnInit() {
  }

}
export { alumnos };