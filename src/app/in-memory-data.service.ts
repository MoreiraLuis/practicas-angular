import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Alumnos } from '../main';
import { Notas } from '../main';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const usuariosDb = [
      { id: 1, nombres: "Luis Manuel", apellidos: "Moreira Esteban", edad: 27, email: "luismanuelmoreiraesteban@gmail.com", contraseña: "123456789", telefono: 622052509, DNI:4725525, direccion: "Calle Doctor Ángel Pascual Megías", cp: 3015 },
      { id: 2, nombres: "Jesús", apellidos: "Alonso", edad: 29, email: "jesusalonso@ejemplo.es", contraseña: "123456789", telefono: 611215496, DNI:4745236, direccion: "Av. Doctor Rico Pérez", cp: 3014 },
      { id: 3, nombres: "María", apellidos: "Rodríguez", edad: 23, email: "mariarodriguez@ejemplo.es", contraseña: "123456789", telefono: 699045478, DNI: 4773592, direccion: "Av. Rambla", cp: 3015 },
      { id: 4, nombres: "Jorge", apellidos: "Álvarez Solís", edad: 30, email: "jorge@clicaonline.com", contraseña: "elmejor", telefono: 123456789, DNI: 12345678, direccion: "Av. Alcalde Lorenzo Carbonell", cp: 3008 },
    ];
    const notasDb = [
      { nombres: "Luis Moreira", curso: "WEB FULL STACK", asignatura: "JavaScript", nota: "19/20" },
      { nombres: "María Flores", curso: "WEB FULL STACK", asignatura: "HTML", nota: "13/20" },
    ];
    return {usuariosDb, notasDb};
  }

  genId(usuariosDb: Alumnos[]): number {
    return usuariosDb.length > 0 ? Math.max(...usuariosDb.map(usuariosDb => usuariosDb.id)) + 1 : 11;
  }
}